import {cn} from "../lib/utils.ts";
import {Calendar} from "lucide-react";
import {Separator} from "@/components/ui/separator.tsx";
import './App.css';
import Sidebar from "@/components/Sidebar.tsx";
import {FaLaravel, FaReact, FaAngular, FaNodeJs, FaMobile} from "react-icons/fa";
import {Link} from "react-router";
import {GoArrowLeft} from "react-icons/go";
import {SiNextdotjs, SiMysql, SiTailwindcss} from "react-icons/si";

export default function Experiences() {
    return (
        <div
            className={cn(
                "mx-auto flex w-full flex-1 flex-col overflow-hidden border border-neutral-200 md:flex-row dark:border-neutral-600",
                "h-screen",
            )}
        >
            <Sidebar/>
            <Projects/>
        </div>
    )
}

function Projects() {
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
                        <div className="flex items-center gap-2">
                            <Link to="/" className="text-zinc-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-500 transition-colors">
                                <GoArrowLeft className="h-6 w-6" />
                            </Link>
                            <h1 className="text-4xl font-semibold font-display text-zinc-900 dark:text-white sm:text-6xl">
                                Experiences
                            </h1>
                        </div>
                        <h2 className="text-xl font-display font-medium text-zinc-700 dark:text-zinc-200">
                            Projects & Professional Work
                        </h2>
                        <Separator className="bg-zinc-400 dark:bg-zinc-300 h-0.5 mt-2 rounded-sm"/>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="">
                            <h3 className="text-3xl font-display font-semibold text-zinc-900 dark:text-white">
                                Recent Projects
                            </h3>
                            <Separator className="bg-zinc-400 h-0.5 mt-2 rounded-sm"/>
                        </div>
                        <p className="text-zinc-800 font-display font-medium dark:text-zinc-200 leading-7">
                            Detailed overview of my most significant personal and freelance projects.
                        </p>
                        <div className="w-full h-full mt-2 flex flex-col gap-8">
                            {/* MealMates Project */}
                            <div className="w-full rounded-xl bg-[#2a3038] py-8 px-8 border dark:border-zinc-600">
                                <h3 className="text-2xl font-bold font-display relative z-20 text-white">
                                    Mealmates
                                </h3>
                                <div className="mt-3 space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="text-zinc-400 h-5 w-5"/>
                                        <p className="text-zinc-400">Mar 2025 - Jul 2025</p>
                                        <p className="text-zinc-400">|</p>
                                        <p className="text-zinc-400">4 months (In development)</p>
                                    </div>
                                    <a className="text-emerald-500 hover:underline" href="https://mealmates.imranesallak.com/">
                                        mealmates.imranesallak.com
                                    </a>
                                </div>
                                <div className="mt-6">
                                    <p className="text-zinc-800 font-display font-medium dark:text-zinc-200 leading-7">
                                        A Too Good To Go alternative for food lovers. C2C marketplace designed to reduce food waste
                                        by connecting people with excess food to those who can use it. The platform features real-time
                                        notifications, secure payment processing, and an intuitive user interface.
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <FaReact className="text-blue-400" /> React
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <SiNextdotjs className="text-white" /> Next.js
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <SiTailwindcss className="text-blue-400" /> Tailwind
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <FaNodeJs className="text-green-500" /> Node.js
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <SiMysql className="text-blue-500" /> MySQL
                                        </span>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                                        <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                                            <li>Real-time food listing and availability tracking</li>
                                            <li>Location-based search and filtering</li>
                                            <li>Secure payment integration with Stripe</li>
                                            <li>User ratings and review system</li>
                                            <li>Mobile-responsive design with progressive web app capabilities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* HPMTrack Project */}
                            <div className="w-full rounded-xl bg-[#2a3038] py-8 px-8 border dark:border-zinc-600">
                                <h3 className="text-2xl font-bold font-display relative z-20 text-white">
                                    HPMTrack
                                </h3>
                                <div className="mt-3 space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="text-zinc-400 h-5 w-5"/>
                                        <p className="text-zinc-400">May 2024 - Aug 2024</p>
                                        <p className="text-zinc-400">|</p>
                                        <p className="text-zinc-400">3 months</p>
                                    </div>
                                    <a className="text-emerald-500 hover:underline" href="https://apimobile.testingtest.fr/login">
                                        apimobile.testingtest.fr
                                    </a>
                                </div>
                                <div className="mt-6">
                                    <p className="text-zinc-800 font-display font-medium dark:text-zinc-200 leading-7">
                                        A comprehensive solution for HPM (Hygiène Prévention et Maîtrise du risque) corporation.
                                        The system includes a mobile application and back office portal for food businesses to manage
                                        HACCP (Hazard Analysis Critical Control Point) compliance and risk management protocols.
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <FaLaravel className="text-red-500" /> Laravel
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <FaReact className="text-blue-400" /> React Native
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <SiMysql className="text-blue-500" /> MySQL
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <FaMobile className="text-zinc-300" /> Mobile App
                                        </span>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                                        <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                                            <li>Custom dashboard for real-time HACCP monitoring</li>
                                            <li>Digital checklists and compliance documentation</li>
                                            <li>Automated alert system for critical control points</li>
                                            <li>Detailed reporting and analytics tools</li>
                                            <li>Role-based access control for team management</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* TournaMaster Project */}
                            <div className="w-full rounded-xl bg-[#2a3038] py-8 px-8 border dark:border-zinc-600">
                                <h3 className="text-2xl font-bold font-display relative z-20 text-white">
                                    TournaMaster
                                </h3>
                                <div className="mt-3 space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="text-zinc-400 h-5 w-5"/>
                                        <p className="text-zinc-400">Feb 2025 - Apr 2025</p>
                                        <p className="text-zinc-400">|</p>
                                        <p className="text-zinc-400">2 months</p>
                                    </div>
                                    <a className="text-emerald-500 hover:underline" href="https://tournamaster.imranesallak.com">
                                        tournamaster.imranesallak.com
                                    </a>
                                </div>
                                <div className="mt-6">
                                    <p className="text-zinc-800 font-display font-medium dark:text-zinc-200 leading-7">
                                        A tournament management platform designed for gaming communities and esports organizers.
                                        TournaMaster simplifies the process of creating and managing competitive tournaments with
                                        automated bracket generation, player registration, and real-time result tracking.
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <FaAngular className="text-red-500" /> Angular
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <FaNodeJs className="text-green-500" /> Node.js
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <SiMysql className="text-blue-500" /> MySQL
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <SiTailwindcss className="text-blue-400" /> Tailwind
                                        </span>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                                        <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                                            <li>Advanced tournament bracket generation (single/double elimination, round-robin)</li>
                                            <li>Team and player management system</li>
                                            <li>Real-time match updates and notifications</li>
                                            <li>Custom tournament branding options</li>
                                            <li>Integrated chat and messaging for participants</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 mt-4">
                        <div className="">
                            <h3 className="text-3xl font-display font-semibold text-zinc-900 dark:text-white">
                                Professional Experience
                            </h3>
                            <Separator className="bg-zinc-400 h-0.5 mt-2 rounded-sm"/>
                        </div>

                        <div className="w-full h-full mt-2 flex flex-col gap-8">
                            {/* Experience 1 */}
                            <div className="w-full rounded-xl bg-[#2a3038] py-8 px-8 border dark:border-zinc-600">
                                <h3 className="text-2xl font-bold font-display relative z-20 text-white">
                                    Senior Fullstack Developer
                                </h3>
                                <div className="mt-1 text-lg text-emerald-400">TechSolutions Paris</div>
                                <div className="mt-3 space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="text-zinc-400 h-5 w-5"/>
                                        <p className="text-zinc-400">Jan 2023 - Present</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-zinc-800 font-display font-medium dark:text-zinc-200 leading-7">
                                        Lead development of enterprise-grade web applications for clients across the financial and healthcare sectors.
                                        Responsible for architecture planning, team coordination, and implementing best practices for scalable,
                                        secure application development.
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <FaReact className="text-blue-400" /> React
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <SiNextdotjs className="text-white" /> Next.js
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <FaLaravel className="text-red-500" /> Laravel
                                        </span>
                                        <span className="px-3 py-1 bg-zinc-700 text-zinc-200 text-sm rounded-full flex items-center gap-1">
                                            <FaNodeJs className="text-green-500" /> Node.js
                                        </span>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Key Responsibilities:</h4>
                                        <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                                            <li>Architected and developed microservice-based applications</li>
                                            <li>Led a team of 5 developers using Agile methodologies</li>
                                            <li>Implemented CI/CD pipelines for automated testing and deployment</li>
                                            <li>Optimized performance for high-traffic web applications</li>
                                            <li>Conducted regular code reviews and mentored junior developers</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Experience 2 */}
                            <div className="w-full rounded-xl bg-[#2a3038] py-8 px-8 border dark:border-zinc-600">
                                <h3 className="text-2xl font-bold font-display relative z-20 text-white">
                                    Web Developer
                                </h3>
                                <div className="mt-1 text-lg text-emerald-400">DigitalCraft Agency</div>
                                <div className="mt-3 space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="text-zinc-400 h-5 w-5"/>
                                        <p className="text-zinc-400">Jun 2021 - Dec 2022</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-zinc-800 font-display font-medium dark:text-zinc-200 leading-7">
                                        Developed responsive web applications and e-commerce solutions for clients across various industries.
                                        Collaborated with design and marketing teams to implement engaging user experiences and optimize
                                        conversion rates.
                                    </p>

                                    <div className="mt-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Key Achievements:</h4>
                                        <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                                            <li>Built 15+ client websites with modern technology stacks</li>
                                            <li>Reduced page load times by an average of 40% through optimization</li>
                                            <li>Implemented responsive designs for cross-device compatibility</li>
                                            <li>Integrated third-party APIs for enhanced functionality</li>
                                            <li>Developed custom CMS solutions for client content management</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-8 mb-4">
                        <Link to="/" className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
