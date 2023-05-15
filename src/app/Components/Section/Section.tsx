interface SectionProps  {
    children : React.ReactNode
}

const Section = ({children} : SectionProps) => {
    return (
        <section className="h-screen md:h-[50vh] bg-slate-100 px-8">
            {children}
        </section>
    );
}

export default Section;

