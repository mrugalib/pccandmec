/** Careons reference recreation — full article route for a blog post. */
import { ChevronLeft, MoveRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { blogs } from "@/lib/careonData";
import { DonationCheckoutButton } from "@/components/DonationCheckout";
import SiteHeader from "@/components/SiteHeader";
import NotFound from "./NotFound";
import "../detail.css";

export default function BlogDetail() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogs.find((item) => item.slug === params?.slug);
  if (!post) return <NotFound />;

  const relatedPosts = blogs.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="detail-page">
      <SiteHeader variant="detail" />
      <main>
        <section className="detail-hero">
          <img src={post.image} alt="" />
          <div className="detail-hero__shade" />
          <div className="detail-shell detail-hero__content">
            <Link href="/#blog" className="detail-back"><ChevronLeft size={16} /> Back to Blogs</Link>
            <p className="detail-kicker">{post.category} · {post.date} · {post.readTime}</p>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </div>
        </section>

        <section className="detail-body">
          <div className="detail-shell detail-body__grid">
            <div>
              <p className="detail-kicker detail-kicker--dark">By {post.author}</p>
              <h2>The full story.</h2>
            </div>
            <div className="detail-body__copy">
              {post.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {post.gallery.length > 0 && (
          <section className="detail-gallery" aria-labelledby="gallery-title">
            <div className="detail-shell">
              <p className="detail-kicker detail-kicker--dark">Gallery</p>
              <h2 id="gallery-title">The story, in pictures.</h2>
              <div className="detail-gallery__grid">
                {post.gallery.map((src, index) => (
                  <img key={src + index} src={src} alt={`${post.title} — photo ${index + 1}`} loading="lazy" />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="detail-donation" aria-labelledby="detail-donation-title">
          <div className="detail-shell detail-donation__inner">
            <div><p className="detail-kicker">Take part</p><h2 id="detail-donation-title">Help us write the next story like this one.</h2></div>
            <div><DonationCheckoutButton className="detail-donation__button" campaign={post.title}>Register your support <MoveRight size={17} /></DonationCheckoutButton></div>
          </div>
        </section>

        <section className="detail-related" aria-labelledby="related-title">
          <div className="detail-shell">
            <p className="detail-kicker detail-kicker--dark">Keep reading</p>
            <h2 id="related-title">More stories &amp; voices</h2>
          </div>

          <div className="detail-shell detail-related__group">
            <div className="detail-related__grid">
              {relatedPosts.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="detail-related__card">
                  <img src={item.image} alt="" loading="lazy" />
                  <div>
                    <span className="detail-related__tag">{item.category}</span>
                    <h4>{item.title}</h4>
                    <p>{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="detail-footer"><div className="detail-shell"><span>Careon</span><Link href="/">Return to the homepage <MoveRight size={15} /></Link></div></footer>
    </div>
  );
}
