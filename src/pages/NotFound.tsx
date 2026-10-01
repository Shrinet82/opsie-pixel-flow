import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";

export default function NotFound() {
  return (
    <Layout path="/404" noindex>
      <section className="on-dark grain relative flex min-h-screen items-center bg-ink text-bone">
        <div className="wrap relative z-10 py-32">
          <p className="label muted mb-8">404</p>
          <h1 className="h-display max-w-[14ch]">This page went missing.</h1>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/contact" className="btn btn-secondary">Contact</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
