interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
    return (
        <div className="rounded-lg py-4 text-center bg-primary text-white">
        <h3 className="text-2xl font-bold">{number}</h3>
        <p className="text-lg">{label}</p>
        </div>
    );
    }


const PastYearSection = () => {
  return (
 
        <section id="previous-year" className="py-16 bg-secondary/50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Previous Year's Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <StatCard number="117" label="Participants" />
              <StatCard number="27" label="Teams" />
              <StatCard number="27" label="Projects" />
              <StatCard number="12" label="Finalists" />
            </div>
            <div className="rounded-lg p-8">
              <h3 className="text-xl text-center font-semibold mb-4">Winning Project Highlight</h3>
              <p className="text-muted-foreground text-center">
                Last year's winning team developed a sustainable solution for local waste management, 
                impacting over 1000 households in the community.
              </p>
            </div>
          </div>
        </section>
      );
      

}

export default PastYearSection