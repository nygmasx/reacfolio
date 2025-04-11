import { cn } from "../lib/utils.ts";
import {CardSpotlight} from "@/components/ui/card-spotlight.tsx";
import {Calendar} from "lucide-react";
import {HoverBorderGradient} from "@/components/ui/hover-border-gradient.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import './App.css';
import Sidebar from "@/components/Sidebar.tsx";

export default function App() {
    return (
        <div
            className={cn(
                "mx-auto flex w-full flex-1 flex-col overflow-hidden border border-neutral-200 md:flex-row dark:border-neutral-600",
                "h-screen",
            )}
        >
            <Sidebar/>
            <Home/>
        </div>
    )
}

function Home() {

  return (
      <div className="flex flex-1">
          <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-[#1a1d24]">
              <div
                  className={cn(
                      "absolute inset-0",
                      "[background-size:60px_60px]",
                      "[background-image:linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)]",
                      "dark:[background-image:linear-gradient(to_right,#2a303a_1px,transparent_1px),linear-gradient(to_bottom,#2a303a_1px,transparent_1px)]",
                  )}
              />
              <div
                  className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:linear-gradient(transparent_5%,gray)] dark:bg-metal"/>

              <div
                  className="h-full overflow-y-auto no-scrollbar py-16 px-4 sm:px-0 sm:w-4/5 md:w-3/4 lg:w-[55%] z-20 flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                      <h1 className="text-4xl font-semibold font-display text-zinc-900 dark:text-white sm:text-6xl">
                          Imrane Sallak
                      </h1>
                      <h2 className="text-xl font-display font-medium text-zinc-700 dark:text-zinc-200">Software
                          Engineer</h2>
                      <Separator className="bg-zinc-400 dark:bg-zinc-300 h-0.5 mt-2 rounded-sm"/>
                  </div>

                  <div className="flex flex-col gap-4">
                      <p className="text-zinc-800 font-display font-medium dark:text-zinc-200 leading-7">
                          Hello! I'm Imrane Sallak, a fullstack engineer based in
                          Paris (France),
                          boasting over 5 years of hands-on experience in web development. Specialised in cutting-edge
                          technologies like TypeScript, JavaScript, React, or Next.js, I am passionate about crafting
                          scalable, high-performance web applications that deliver exceptional user experiences.
                      </p>
                      <p className="text-zinc-800 font-display font-medium dark:text-zinc-200 leading-7">
                          I'm also a member of a collective named 99Stud, which gathers artists and developers.
                      </p>
                  </div>

                  <div className="flex flex-col gap-8">
                      <div className="">
                          <h3 className="text-3xl font-display font-semibold text-zinc-900 dark:text-white">My last
                              experiences</h3>
                          <Separator className="bg-zinc-400 h-0.5 mt-2 rounded-sm"/>
                      </div>
                      <p className="text-zinc-800 font-display font-medium dark:text-zinc-200 leading-7">Here is a
                          selection of my most significant personal/freelance projects</p>
                      <div className="w-full h-full mt-2 flex flex-col gap-6">
                          <CardSpotlight
                              className="w-full rounded-xl bg-[#2a3038] py-6 px-8 border dark:border-zinc-600">
                              <h3 className="text-xl font-bold font-display relative z-20 text-white">
                                  TournaMaster
                              </h3>
                              <div className="mt-2 space-y-2">
                                  <div className="flex items-center gap-2 text-sm">
                                      <Calendar className="text-zinc-400 h-5 w-5"/>
                                      <p className="text-zinc-400">Feb 2025 - Apr 2025</p>
                                      <p className="text-zinc-400">|</p>
                                      <p className="text-zinc-400">2 months</p>
                                  </div>
                                  <a className="text-emerald-500" href="/">imranesallak.com</a>
                              </div>
                          </CardSpotlight>
                          <CardSpotlight
                              className="w-full rounded-xl bg-[#2a3038] py-6 px-8 border dark:border-zinc-600">
                              <h3 className="text-xl font-bold font-display relative z-20 text-white">
                                  TournaMaster
                              </h3>
                              <div className="mt-2 space-y-2">
                                  <div className="flex items-center gap-2 text-sm">
                                      <Calendar className="text-zinc-400 h-5 w-5"/>
                                      <p className="text-zinc-400">Feb 2025 - Apr 2025</p>
                                      <p className="text-zinc-400">|</p>
                                      <p className="text-zinc-400">2 months</p>
                                  </div>
                                  <a className="text-emerald-500"
                                        href="https://apimobile.testingtest.fr/login">apimobile.testingtest.fr</a>
                              </div>
                              <div className="mt-6">
                                  <p className="text-zinc-800 font-display font-medium dark:text-zinc-200 leading-7">
                                      I'm also a member of a collective named 99Stud, which gathers artists and
                                      developers.
                                  </p>
                              </div>
                              <div className="mt-4">
                                  <div className="flex">
                                      <HoverBorderGradient
                                          containerClassName="rounded-full"
                                          as="button"
                                          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                      >
                                          <span>Aceternity UI</span>
                                      </HoverBorderGradient>
                                  </div>
                              </div>
                          </CardSpotlight>
                          <CardSpotlight
                              className="w-full rounded-xl bg-[#2a3038] py-6 px-8 border dark:border-zinc-600">
                              <h3 className="text-xl font-bold font-display relative z-20 text-white">
                                  TournaMaster
                              </h3>
                              <div className="mt-2 space-y-2">
                                  <div className="flex items-center gap-2 text-sm">
                                      <Calendar className="text-zinc-400 h-5 w-5"/>
                                      <p className="text-zinc-400">Feb 2025 - Apr 2025</p>
                                      <p className="text-zinc-400">|</p>
                                      <p className="text-zinc-400">2 months</p>
                                  </div>
                                  <a className="text-emerald-500"
                                        href="https://apimobile.testingtest.fr/login">apimobile.testingtest.fr</a>
                              </div>
                              <div className="mt-6">
                                  <p className="text-zinc-800 font-display font-medium dark:text-zinc-200 leading-7">
                                      I'm also a member of a collective named 99Stud, which gathers artists and
                                      developers.
                                  </p>
                              </div>
                              <div className="mt-4">
                                  <div className="flex">
                                      <HoverBorderGradient
                                          containerClassName="rounded-full"
                                          as="button"
                                          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                      >
                                          <span>Aceternity UI</span>
                                      </HoverBorderGradient>
                                  </div>
                              </div>
                          </CardSpotlight>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
