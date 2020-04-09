import { useRef } from "react";
import Head from "next/head";
import SocialMeta from "../components/socialMeta";

const BASE_URL = "https://yt-dw-api.herokuapp.com";

function Home() {
  const input = useRef();
  const button = useRef();

  async function download(e) {
    e.preventDefault();
    const url = input.current.value;
    button.current.disabled = true;
    window.open(`${BASE_URL}/api/download/v1?url=${url}`);
    button.current.disabled = false;
    input.current.value = "";
  }

  return (
    <div className="container">
      <Head>
        <title>YouTube Downloader</title>
        <SocialMeta
          image="/screenshot1.png"
          title="YTDW - YouTube Downloader"
          url="https://ytdw.now.sh/"
          description="download videos from youtube quickly and free of charge."
        />
      </Head>

      <main>
        <h1 className="title">
          YouTube <span>Downloader</span>
        </h1>

        <p className="description">A simple video downloader</p>
        <form onSubmit={download}>
          <input
            ref={input}
            type="text"
            placeholder="Video URL ou ID"
            required
          />
          <button ref={button} type="submit">
            Download
          </button>
        </form>
      </main>

      <footer>
        <a
          href="https://github.com/devarthurribeiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Arthur Ribeiro
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 10rem 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title span {
          color: #ff0000;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.05;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        input,
        button {
          width: 100%;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          border: none;
        }

        button:focus,
        input:focus {
          outline: rgba(255, 0, 0, 0.6) auto 2px;
          outline-radius: 5px;
        }

        input {
          border: 1px solid #bababa;
        }

        button {
          width: 40%;
          border-radius: 5px;
          padding: 0.75rem;
          background-color: #ff0000;
          box-shadow: 0px 3px 8px 0px rgba(255, 0, 0, 0.6);
          margin-left: 8px;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s;
        }

        form {
          width: 100%;
          display: flex;
          flex-direction: columns;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export default Home;
