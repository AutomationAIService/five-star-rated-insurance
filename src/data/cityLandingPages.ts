export type ArizonaInsuranceCity = {
  slug: string
  name: string
}

/** Single-segment `/[slug]` location pages requested for Arizona metros. */
export const ARIZONA_INSURANCE_CITIES: ArizonaInsuranceCity[] = [
  { slug: "phoenix", name: "Phoenix" },
  { slug: "scottsdale", name: "Scottsdale" },
  { slug: "mesa", name: "Mesa" },
  { slug: "gilbert", name: "Gilbert" },
  { slug: "chandler", name: "Chandler" },
  { slug: "tempe", name: "Tempe" },
  { slug: "glendale", name: "Glendale" },
  { slug: "peoria", name: "Peoria" },
  { slug: "surprise", name: "Surprise" },
  { slug: "queen-creek", name: "Queen Creek" },
  { slug: "goodyear", name: "Goodyear" },
  { slug: "avondale", name: "Avondale" },
  { slug: "tucson", name: "Tucson" },
]

export function getArizonaInsuranceCityBySlug(slug: string): ArizonaInsuranceCity | undefined {
  return ARIZONA_INSURANCE_CITIES.find((c) => c.slug === slug)
}
