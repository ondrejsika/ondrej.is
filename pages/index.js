import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ondrej.is</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400&display=swap" rel="stylesheet"></link>
      </Head>
      <div
        style={{
          fontFamily: "'Source Sans Pro', sans-serif",
          margin: "1em",
        }}
      >
        <h1>ondrej.is</h1>
        <p>
          <a href="https://instagram.com/ondrej_and_iceland" target="_blank">
            @ondrej_and_iceland
          </a> on Instagram
        </p>
        <p>
          <a href="https://t.me/ondrej_and_iceland" target="_blank">
            @ondrej_and_iceland
          </a> on Telegram (Channel)
        </p>
        <p>
          <a href="https://ondrejsika.notion.site/ondrejsika/bda91864785f437cb1708ed851d39627" target="_blank">
            Where to go
          </a> in Iceland (Notion page)
        </p>
        <p>
          <a href="https://www.citycarrental.is/" target="_blank">
            City Car Rental Iceland
          </a>, cheap & proven car rental
        </p>
        <h4 style={{ margin: "2em 0 0 0" }}>Photos</h4>
        <p>
          <a href="https://www.flickr.com/photos/ondrejsika/albums/72157667894632618" target="_blank">
            2018
          </a>, <a href="https://www.flickr.com/photos/ondrejsika/albums/72157674508120208" target="_blank">
            2018 II
          </a>, <a href="https://www.flickr.com/photos/ondrejsika/albums/72157674508120208" target="_blank">
            2018 III
          </a>
        </p>
        <p>
          <a href="https://www.flickr.com/photos/ondrejsika/albums/72157663512883808/with/38967102201/" target="_blank">
            2017
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com/explore/tags/ondrej_and_iceland/" target="_blank">
            #ondrej_and_iceland
          </a> on Instagram
        </p>
        <p
          style={{
            marginTop: "2em",
          }}
        >
          Any questions about the Iceland?
          <br />
          Ask me via email <a href="mailto:ondrej@ondrejsika.com">ondrej@ondrejsika.com</a> or <a href="https://t.me/ondrejsika" target="_blank">
            @ondrejsika
          </a> on Telegram
        </p>
        <p
          style={{
            marginTop: "3em",
          }}
        >
          (c) 2023 <a href="https://ondrejsika.com" target="_blank">
            Ondrej Sika
          </a> & <a href="https://ond.is" target="_blank">
            ond.is
          </a>
        </p>
      </div>
    </>
  );
}
