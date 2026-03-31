import type { MetadataRoute } from "next";

const BASE_URL = "https://kjj-top-clinic.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/doctors`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/departments/sowhagi`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/departments/soonhwangi`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/departments/hoheupgi`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/departments/ent`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/endoscopy/stomach`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/endoscopy/colon`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/endoscopy/polypectomy`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/endoscopy/sedation`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/checkup/cancer`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/checkup/national`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/checkup/comprehensive`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/checkup/employment`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/chronic/hypertension`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/chronic/diabetes`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/chronic/hyperlipidemia`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/chronic/osteoporosis`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/special/obesity`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/special/iv-therapy`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/special/dementia`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/vaccination`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/about/location`, lastModified: new Date(), priority: 0.6 },
    { url: `${BASE_URL}/about/hours`, lastModified: new Date(), priority: 0.6 },
    { url: `${BASE_URL}/qna`, lastModified: new Date(), priority: 0.6 },
  ];
}
