const youtubedl = require("youtube-dl");

export default (req, res) => {
  const { url } = req.query;
  console.log("ok");
  const download = youtubedl(url, ["--format=best"]);

  download.on("info", function (info) {
    res.setHeader(
      "Content-disposition",
      `attachment; filename=${info._filename}`
    );
    download.pipe(res);
  });

  download.on("end", (e) => res.end());
};
