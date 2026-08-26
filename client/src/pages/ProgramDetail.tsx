/** Careons reference recreation — dynamic programme detail route. */
import { useRoute } from "wouter";
import { programs } from "@/lib/careonData";
import DetailPage from "./DetailPage";
import NotFound from "./NotFound";

export default function ProgramDetail() {
  const [, params] = useRoute("/programs/:slug");
  const program = programs.find((item) => item.slug === params?.slug);
  return program ? <DetailPage item={program} label="Program" /> : <NotFound />;
}
