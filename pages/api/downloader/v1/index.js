import ytdl from "ytdl-core";

export default async (req, res) => {
  const { url } = req.query;
  const info = await ytdl.getInfo(url);
  res.setHeader(
    "Content-disposition",
    `attachment; filename=${info.title}.mp4`
  );
  ytdl(url, { filter: (format) => format.container === "mp4" }).pipe(res);
};
