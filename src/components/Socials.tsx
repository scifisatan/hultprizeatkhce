import {  Instagram, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface SocialIconProps {
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const SocialIcon = ({ href, Icon }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    className={cn(
      buttonVariants({ variant: "outline" }),
      "group p-3 transition-shadow duration-200 hover:shadow-[0_0_20px_10px_hsl(327_100%_45%/0.2)] hover:rounded-full"
    )}
  >
    <Icon className="h-6 transition-colors duration-200 group-hover:text-primary" />
  </a>
)

const Socials = () => {
  return (
    <div className="mt-20 flex flex-col items-center gap-4">
      <p className="text-center: text-muted-foreground lg:text-left">
        Connect with us on:
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* <SocialIcon href="https://facebook.com/hultatkhce" Icon={Facebook} /> */}
        <SocialIcon href="https://instagram.com/hultatkhce" Icon={Instagram} />
        <SocialIcon href="https://linkedin.com/company/hultatkhce" Icon={Linkedin} />
      </div>
    </div>
  )
}

export default Socials