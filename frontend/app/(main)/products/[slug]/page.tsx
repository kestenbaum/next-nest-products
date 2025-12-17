import Product from "@/components/Product";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
    const { slug } = await params;

    return <Product id={slug} />;
}