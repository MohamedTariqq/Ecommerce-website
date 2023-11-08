import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const product = await getData(params.id);

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function post({ params }) {
  const product = await getData(params.id);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.deck}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={product.thumbnail}
            alt="postImage"
            fill={true}
          />
          <span className={styles.author}>Category: {product.category}</span>
          <span className={styles.price}>Price: ${product.price}</span>
          <span className={styles.brand}>Brand: {product.brand}</span>
          <span className={styles.rating}>Rating: {product.rating}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallary}>
          {product.images.map((image) => (
            <Image
              key={product.id}
              src={image}
              alt={product.title}
              width={200}
              height={200}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
