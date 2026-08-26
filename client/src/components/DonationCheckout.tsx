/**
 * Careons reference recreation — simulated donation checkout.
 * Uses the shared dialog primitive, makes the no-payment simulation explicit, and never transmits payment data.
 */
import { Check, CreditCard, LockKeyhole, MoveRight } from "lucide-react";
import { type FormEvent, type ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "../checkout.css";

const suggestedAmounts = [25, 50, 100, 250];

export function DonationCheckoutButton({
  children,
  className = "",
  campaign = "PCC & MEC community fund",
}: {
  children: ReactNode;
  className?: string;
  campaign?: string;
}) {
  const [open, setOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmedName, setConfirmedName] = useState("");
  const [complete, setComplete] = useState(false);

  const amount = Math.max(1, Number(customAmount) || selectedAmount);

  function resetFlow() {
    setComplete(false);
    setName("");
    setEmail("");
    setConfirmedName("");
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) resetFlow();
  }

  function submitDonation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setConfirmedName(name.trim());
    setComplete(true);
    setName("");
    setEmail("");
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className={className} type="button">{children}</button>
      </DialogTrigger>
      <DialogContent className="checkout-modal" showCloseButton={!complete}>
        {complete ? (
          <div className="checkout-success" role="status">
            <div className="checkout-success__mark"><Check size={28} strokeWidth={2.3} /></div>
            <p className="checkout-eyebrow">Donation flow complete</p>
            <DialogTitle>Thank you{confirmedName ? `, ${confirmedName}` : ""}.</DialogTitle>
            <DialogDescription>Your simulated ${amount.toLocaleString()} donation to {campaign} has been noted. No payment was collected.</DialogDescription>
            <button className="checkout-primary" type="button" onClick={() => setOpen(false)}>Return to PCC &amp; MEC <MoveRight size={17} /></button>
          </div>
        ) : (
          <div className="checkout-form-wrap">
            <div className="checkout-topline"><span>PCC &amp; MEC donation</span><span><LockKeyhole size={13} /> Simulated checkout</span></div>
            <DialogTitle>Back a practical mission.</DialogTitle>
            <DialogDescription>Select an amount and share your details. This demonstration does not process or store a payment.</DialogDescription>
            <form onSubmit={submitDonation} className="checkout-form">
              <fieldset>
                <legend>Choose an amount</legend>
                <div className="checkout-amounts">
                  {suggestedAmounts.map((option) => <button key={option} type="button" aria-pressed={!customAmount && selectedAmount === option} className={!customAmount && selectedAmount === option ? "is-selected" : ""} onClick={() => { setSelectedAmount(option); setCustomAmount(""); }}>${option}</button>)}
                  <label className={customAmount ? "is-custom" : ""}><span>$</span><input aria-label="Custom donation amount" type="number" inputMode="decimal" min="1" placeholder="Other" value={customAmount} onChange={(event) => setCustomAmount(event.target.value)} /></label>
                </div>
              </fieldset>
              <div className="checkout-inputs">
                <label>Full name<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" autoComplete="name" /></label>
                <label>Email address<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@email.com" autoComplete="email" /></label>
              </div>
              <div className="checkout-summary"><span><CreditCard size={16} /> Simulated secure payment</span><strong>${amount.toLocaleString()}</strong></div>
              <button className="checkout-primary" type="submit">Complete simulated donation <MoveRight size={17} /></button>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
