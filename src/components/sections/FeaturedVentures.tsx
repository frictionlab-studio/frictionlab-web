// FeaturedVentures — the Products section: cards for every live product with a
// one-sentence description, price, a link to the product, and a pricing link.
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedVentures } from "@/data/ventures";

export function FeaturedVentures() {
  const products = getFeaturedVentures();

  return (
    <Section id="products">
      <SectionHeading
        eyebrow="Products"
        title={
          <>
            AI products you can{" "}
            <span className="text-gradient-gold">use today</span>
          </>
        }
        description="FrictionLab LLC builds and operates these products. Each has its own subscription and pricing."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <GlassCard
            key={product.slug}
            glow={product.accent}
            padding="lg"
            className="flex flex-col"
          >
            <h3 className="text-xl font-semibold text-foreground">
              {product.name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted">
              {product.description}
            </p>

            <div className="mt-5 text-sm font-medium text-foreground">
              {product.price}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Button
                href={product.liveUrl}
                size="sm"
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit product
              </Button>
              <a
                href={product.pricingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-gold-400"
              >
                View pricing
              </a>
            </div>
          </GlassCard>
        ))}
      </div>

      <p className="mt-10 text-center text-xs leading-6 text-faint">
        Payments are processed securely by Stripe. Charges appear as FRICTIONLAB
        on your statement.
      </p>
    </Section>
  );
}
