/** Careons reference recreation — dynamic cause detail route. */
import { useRoute } from "wouter";
import { causes } from "@/lib/careonData";
import DetailPage from "./DetailPage";
import NotFound from "./NotFound";

export default function CauseDetail() {
  const [, params] = useRoute("/causes/:slug");
  const cause = causes.find((item) => item.slug === params?.slug);
  return cause ? <DetailPage item={cause} label="Cause" /> : <NotFound />;
}
