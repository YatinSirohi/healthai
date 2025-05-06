import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
} from "lucide-react";

const UserPrograms = () => {
  return (
    <div className="w-full pb-24 pt-16 relative" style={{ marginTop: "-5rem" }}>
      <div className="container mx-auto max-w-6xl px-4">
        {/* HEADER- PROGRAM GALLERY */}
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden mb-16">
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center" >
          <Link href="/generate-program">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
              style={{ backgroundColor: "LightSkyBlue" }}
            >
              Generate Your Plan
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4">
            Reference of this project is taken from Codesistency youtube channel
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPrograms;