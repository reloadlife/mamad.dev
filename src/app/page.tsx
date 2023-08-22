import Image from 'next/image'
import profile from "./profile.jpeg"
import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaLocationPin,
    FaMobile,
    FaTelegram,
    FaTwitter,
    FaYoutube
} from "react-icons/fa6";

import {Carrois_Gothic} from 'next/font/google'

const cGothic = Carrois_Gothic({weight: "400", subsets: ['latin']})

const latestWritings = [
    {
        title: "Hello World - Testing the Blog",
        url: "/blog/hello-world",
        date: "22 Aug, 2023"
    }
]

export default function Home() {
    return (
        <main className="min-h-screen p-4 md:p-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:mt-10 mt-4">
                <div>
                    <Image
                        width={300}
                        height={300}
                        className="rounded-full"
                        src={profile}
                        alt="mohammad mahdi afshar"
                    />
                </div>
                <div className="flex gap-2 flex-col">
                    <h1 className={`font-bold text-3xl md:text-5xl ${cGothic.className}`}>
                        Mohammad Mahdi Afshar
                    </h1>
                    <h3 className={`font-semibold text-xl md:text-2xl text-gray-400 ${cGothic.className}`}>
                        Senior Software Developer</h3>

                    <div className="flex gap-4">
                        <a href="https://github.com/reloadlife" target="_blank">
                            <FaGithub className="w-6 h-6"/>
                        </a>
                        <a href="https://linkedin.com/in/reloadlife" target="_blank">
                            <FaLinkedinIn className="w-6 h-6"/>
                        </a>
                        <a href="https://t.me/reloadlife" target="_blank">
                            <FaTelegram className="w-6 h-6"/>
                        </a>
                        <a href="https://x.com/mamad_dev" target="_blank">
                            <FaTwitter className="w-6 h-6"/>
                        </a>
                        <a href="https://youtube.com/@reloadlife" target="_blank">
                            <FaYoutube className="w-6 h-6"/>
                        </a>
                        <a href="https://instagram.com/mamad.dev" target="_blank">
                            <FaInstagram className="w-6 h-6"/>
                        </a>
                    </div>

                    <div className="flex gap-4">
                        <span className={`flex justify-center items-center gap-2 ${cGothic.className}`}>
                            <FaLocationPin className="w-6 h-6"/> Tehràn, Iran 🇮🇷
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="mailto:me@mamad.dev" target="_blank"
                            className={`flex justify-center items-center gap-2 ${cGothic.className}`}>
                            <FaEnvelope className="w-6 h-6"/> me@mamad.dev
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="tel:+98 935 931 0395" target="_blank"
                            className={`flex justify-center items-center gap-2 ${cGothic.className}`}>
                            <FaMobile className="w-6 h-6"/> +98 935 931 0395
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="w-[75%]">
                    <h2 className={`font-bold text-2xl md:text-4xl mt-10 ${cGothic.className}`}>
                        About Me
                    </h2>

                    <p className="text-gray-400 mt-4 text-justify">
                        As a knowledgeable software engineer with extensive experience in software development, I have
                        such
                        a diverse set of skills that includes level of competence in a wide range of programming
                        languages
                        such as <span className="text-blue-600">Golang</span>, <span className="text-green-500">
                        Node.js</span>, <span className="text-blue-300">Flutter</span> & <span
                        className="text-blue-300">Dart</span>, <span className="text-yellow-400">Python</span>, <span
                        className="text-indigo-600">PHP</span>, <span
                        className="text-blue-900">Solidity</span> and
                        <span className="text-orange-500"> JavaScript</span>, as well as a thorough
                        understanding of modern frameworks such as React, NextJS, NestJS, Laravel, Django, Flask,
                        Bootstrap,
                        and Tailwind. My expertise in databases, which include MySQL, PostgreSQL, Redis, InfluxDB, and
                        MongoDB, along with a fundamental understanding of Neo4j, enables me to develop and implement
                        highly
                        scalable and resilient solutions that satisfy the demands of today's fast-paced corporate
                        environment. I am also experienced in automation approaches, having used Ansible, Docker, and
                        Kubernetes to enable rapid and efficient deployment procedures.
                    </p>

                    <p className="text-gray-400 mt-4  text-justify">
                        I am a committed team member with a high relevance in lifelong learning and personal
                        development. I
                        am now studying English Translation and Literature at Karaj Azad University, and I am fluent in
                        Persian, English, and have a rudimentary understanding of French and Turkish. My passion in AI
                        and
                        machine learning runs rampant, and I am always looking for new methods to broaden my expertise
                        and
                        keep current in the sector. I have expertise with Linux networking, virtualization systems, and
                        network infrastructure deployment, as well as designing Telegram and Discord bots, web-scraping,
                        and
                        working with GraphQL. furthermore, I am well acquainted with Agile methodologies and also have
                        worked effectively in Agile development.
                    </p>

                    <p className="text-gray-400 mt-4  text-justify">
                        I am confident in my capabilities to provide value to any firm as a proactive individual with a
                        comprehensive comprehension of software development and its underlying ideas. I am dedicated to
                        remaining current on industry trends, and I am constantly willing to take on new challenges and
                        master new skills.
                    </p>


                    <div className="mt-10 flex gap-4">
                        <a href="/resume/" className="p-3 bg-blue-950 rounded-xl">Resumè</a>
                        <a href="/cv/" className="p-3 bg-blue-900 rounded-xl">CV</a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="w-[75%] flex flex-col gap-3">
                    <h2 className={`font-bold text-2xl md:text-4xl mt-10 ${cGothic.className}`}>
                        Latest Writings:
                    </h2>

                    {
                        latestWritings.map((post, index) => (
                            <p
                                key={index}
                                className="text-gray-400 text-justify flex justify-start items-center gap-1">
                                {post.date} | <a
                                href={post.url}
                                className="underline ">{post.title}</a>
                            </p>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="w-[75%] flex flex-col gap-3">
                    <h2 className={`font-bold text-2xl md:text-4xl mt-10 ${cGothic.className}`}>
                        Fun Projects that i have done:
                    </h2>


                    <p className="text-gray-400 text-justify">
                        <a
                            href="https://t.me/DollarChandeBot"
                            className="text-blue-500 underline">Dollar Chande ? 💵 (means how much is USD price
                            ratio)</a> is a Telegram Bot, that is online 24/7 and you can use it to get the latest USD
                        price ratio in
                        Iran; it also comes with a Channel that you can join to, to get the latest USD Price every 5
                        minuets.
                        <br/>
                        you can find the Telegram Channel here: <a
                        href="https://t.me/AlanDollarChande"
                        className="text-blue-500 underline">
                        💸 Dollar Chande ?! | الان دلار چنده ؟</a>
                        <br/>
                        This project is written in <span className="text-blue-600">Golang</span> and uses <span
                        className="text-red-800">Redis</span> as a temporarily cache and <span
                        className="text-blue-600">Docker</span> for deployment.
                    </p>

                    <p className="text-gray-400 text-justify">
                        <a
                            href="https://github.com/TeleLib/TeleLib"
                            className="text-blue-500 underline">TeleLib
                        </a> MultiLanguage Telegram Bot API Wrapper.
                    </p>

                    <p className="text-gray-400 text-justify">
                        <a
                            href="https://github.com/reloadlife/telebot"
                            className="text-blue-500 underline">TeleBot
                        </a> a hard fork of the Original Repo, Telegram Wrapper for Golang.
                    </p>

                    <p className="text-gray-400 text-justify">
                        <a
                            href="https://github.com/reloadlife/nextgo"
                            className="text-blue-500 underline">NextGo
                        </a> A Simple Solution to use NextJS with Golang as a Backend.
                    </p>

                    <p className="text-gray-400 text-justify">
                        <a
                            href="https://github.com/reloadlife/thread_py"
                            className="text-blue-500 underline">ThreadPy
                        </a> A Simple Python Library to use Threads.
                    </p>

                    <p className="text-gray-200 text-justify flex justify-start items-center gap-1">
                        All my OpenSourced projects are accessible on my <span
                        className="underline inline-flex justify-center items-center gap-1">
                        My <a
                        href="https://github.com/reloadlife" target="_blank"
                        className="inline-flex gap-1">
                            <FaGithub className="w-6 h-6"/> GitHub
                        </a>
                    </span>
                    </p>

                    <p className="text-gray-700 text-justify">
                        This list will be updated soon...
                    </p>
                </div>
            </div>
        </main>
    )
}
