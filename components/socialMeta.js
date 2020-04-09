export default ({ title, description, image, url, keywords }) => (
  <>
    <meta name="twitter:site" content="@devArthurR" />
    <meta
      name="twitter:card"
      content={image ? "summary_large_image" : "summary"}
    />
    {title && <meta name="og:title" content={title} />}
    {url && <meta name="og:url" content={url} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="og:description" content={description} />}
    {image && <meta name="og:image" content={`https://nextjs.org${image}`} />}
    {keywords && <meta name="keywords" content={keywords} />}
  </>
);
