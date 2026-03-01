type Props = {
    children: React.ReactNode;
    title: string;
  };
  
  export default function BlogPostLayout({ children, title }: Props) {
    return (
      <article className="max-w-[700px] mx-auto mt-16 px-4">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="prose prose-invert prose-neutral max-w-none">
          {children}
        </div>
      </article>
    );
  }
  