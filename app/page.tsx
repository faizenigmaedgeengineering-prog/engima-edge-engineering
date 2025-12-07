"use client";

import Image from "next/image";
import { Suspense } from "react";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Spline 3D Background */}
            <div className="fixed inset-0 z-0 h-full w-full">
                <Suspense
                    fallback={
                        <div className="absolute inset-0 bg-linear-to-br from-orange-900 via-orange-700 to-orange-500" />
                    }
                >
                    {/* Try using Spline React component first, fallback to iframe */}
                    <div className="absolute inset-0">
                        <iframe
                            src="https://my.spline.design/2b28d78f-57b4-4de4-b383-672828ef4c11"
                            className="h-full w-full border-0"
                            style={{ pointerEvents: "none" }}
                            title="Spline 3D Background"
                        />
                    </div>
                </Suspense>
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

                {/* Abstract Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Large circles */}
                    <motion.div
                        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-linear-to-br from-orange-500/10 to-orange-300/10 blur-3xl"
                        animate={{
                            x: [0, 30, -20, 15, 0],
                            y: [0, -25, 20, -15, 0],
                            scale: [1, 1.1, 0.9, 1.05, 1],
                            opacity: [0.5, 0.65, 0.5, 0.6, 0.5],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-1/3 -right-40 h-80 w-80 rounded-full bg-linear-to-bl from-orange-400/10 to-orange-200/10 blur-3xl"
                        animate={{
                            x: [0, -25, 20, -15, 0],
                            y: [0, 30, -20, 15, 0],
                            scale: [1, 0.95, 1.15, 1.0, 1],
                            opacity: [0.5, 0.65, 0.5, 0.6, 0.5],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-linear-to-tr from-orange-600/10 to-orange-400/10 blur-3xl"
                        animate={{
                            x: [0, 20, -30, 10, 0],
                            y: [0, -30, 25, -10, 0],
                            scale: [1, 1.05, 0.9, 1.1, 1],
                            opacity: [0.5, 0.65, 0.55, 0.6, 0.5],
                        }}
                        transition={{
                            duration: 22,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Geometric shapes */}
                    <motion.div
                        className="absolute top-1/2 left-1/3 h-64 w-64 rotate-45 bg-linear-to-br from-orange-500/10 to-transparent blur-2xl"
                        animate={{
                            x: [0, -20, 25, -15, 0],
                            y: [0, 25, -20, 15, 0],
                            rotate: [45, 50, 40, 48, 45],
                            scale: [1, 1.2, 0.85, 1.1, 1],
                            opacity: [0.4, 0.55, 0.45, 0.5, 0.4],
                        }}
                        transition={{
                            duration: 16,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-1/4 right-1/3 h-48 w-48 -rotate-12 bg-linear-to-tl from-orange-400/10 to-transparent blur-2xl"
                        animate={{
                            x: [0, 15, -25, 20, 0],
                            y: [0, -20, 30, -15, 0],
                            rotate: [-12, -8, -16, -10, -12],
                        }}
                        transition={{
                            duration: 19,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/4 h-56 w-56 rotate-12 bg-linear-to-br from-orange-300/10 to-transparent blur-2xl"
                        animate={{
                            x: [0, -15, 20, -25, 0],
                            y: [0, 20, -25, 15, 0],
                            rotate: [12, 16, 8, 14, 12],
                            scale: [1, 1.1, 0.9, 1.15, 1],
                            opacity: [0.4, 0.5, 0.45, 0.55, 0.4],
                        }}
                        transition={{
                            duration: 17,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Small accent shapes */}
                    <motion.div
                        className="absolute top-20 left-1/2 h-32 w-32 rounded-full bg-orange-500/4 blur-xl"
                        animate={{
                            x: [0, 25, -20, 15, 0],
                            y: [0, -30, 25, -20, 0],
                            scale: [1, 1.3, 0.8, 1.2, 1],
                            opacity: [0.15, 0.3, 0.2, 0.25, 0.15],
                        }}
                        transition={{
                            duration: 14,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-40 right-1/2 h-40 w-40 rounded-full bg-orange-400/4 blur-xl"
                        animate={{
                            x: [0, -20, 30, -15, 0],
                            y: [0, 25, -20, 30, 0],
                            scale: [1, 0.85, 1.25, 1.1, 1],
                            opacity: [0.2, 0.3, 0.15, 0.25, 0.2],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex min-h-screen flex-col">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeIn" }}
                    className="w-full px-6 py-8 md:px-12 md:py-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <Image
                            src="/logo.png"
                            alt="Enigma Edge Engineering Logo"
                            width={200}
                            height={60}
                            priority
                            className="h-auto w-auto max-h-10"
                        />
                    </div>
                </motion.header>

                {/* Hero Section */}
                <main className="flex flex-1 items-center justify-center px-6 py-20 md:px-12">
                    <div className="mx-auto max-w-5xl text-center">
                        {/* Company Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                ease: "easeIn",
                                delay: 0.1,
                            }}
                            className="mb-6 text-5xl font-bold tracking-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl"
                        >
                            Enigma Edge
                            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-600 via-orange-400 to-orange-200">
                                Engineering
                            </span>
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                ease: "easeIn",
                                delay: 0.2,
                            }}
                            className="mb-8 text-xl text-gray-200 drop-shadow-md md:text-2xl lg:text-3xl"
                        >
                            Building Products for
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                ease: "easeIn",
                                delay: 0.3,
                            }}
                            className="mb-12 text-3xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-orange-600 via-orange-400 to-orange-200 drop-shadow-md md:text-4xl lg:text-5xl"
                        >
                            Performance Marketing
                        </motion.p>

                        {/* Enigma Sync Highlight */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: "easeIn",
                                delay: 0.4,
                            }}
                            className="mx-auto mb-12 max-w-3xl"
                        >
                            <div className="rounded-2xl border border-white/30 bg-white/5 backdrop-blur-xl shadow-2xl md:p-12 p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-linear-to-br before:from-white/10 before:to-transparent before:opacity-50 before:pointer-events-none">
                                <div className="relative z-10 mb-4 flex items-center justify-center gap-2">
                                    <span className="rounded-full bg-linear-to-r from-orange-600 to-orange-400 px-4 py-1 text-sm font-semibold text-white">
                                        Featured Product
                                    </span>
                                </div>
                                <h2 className="relative z-10 mb-4 text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                                    Enigma Sync
                                </h2>
                                <p className="relative z-10 mb-6 text-lg leading-relaxed text-gray-200 drop-shadow-md md:text-xl">
                                    The all-in-one platform that connects your
                                    Shopify store with Meta advertising,
                                    providing unified control over your product
                                    catalog and ad campaigns.
                                </p>
                                <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                    <a
                                        href="http://app.enigmaedge.engineering/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative w-full overflow-hidden rounded-full bg-linear-to-r from-gray-800 to-gray-900 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(55,65,81,0.8)] sm:w-auto"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <svg
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                />
                                            </svg>
                                            Start Using Enigma Sync
                                        </span>
                                        <div className="absolute inset-0 bg-linear-to-r from-gray-600 to-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </a>
                                    {/* <a
                                        href="http://app.enigmaedge.engineering/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/20 sm:w-auto"
                                    >
                                        Watch Demo
                                    </a> */}
                                </div>
                                <p className="relative z-10 mt-4 text-center text-sm text-gray-400">
                                    No credit card required
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </main>

                {/* Features Section */}
                <section
                    id="products"
                    className="relative z-10 w-full px-6 py-20 md:px-12"
                >
                    <div className="mx-auto max-w-7xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeIn" }}
                            className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
                        >
                            Why Choose Enigma Sync?
                        </motion.h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            {[
                                {
                                    title: "Seamless Integration",
                                    description:
                                        "Connect your Shopify store with Meta Ads in minutes. No technical expertise required.",
                                    icon: "🔗",
                                },
                                {
                                    title: "Unified Control",
                                    description:
                                        "Manage your product catalog and ad campaigns from one powerful platform.",
                                    icon: "⚡",
                                },
                                {
                                    title: "Optimized Performance",
                                    description:
                                        "Leverage real-time data to maximize your marketing ROI and scale your business.",
                                    icon: "📈",
                                },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.7,
                                        ease: "easeIn",
                                        delay: index * 0.1,
                                    }}
                                    className="rounded-2xl border border-white/30 bg-white/5 backdrop-blur-xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/10 relative overflow-hidden before:absolute before:inset-0 before:bg-linear-to-br before:from-white/10 before:to-transparent before:opacity-50 before:pointer-events-none"
                                >
                                    <div className="relative z-10 mb-4 text-4xl">
                                        {feature.icon}
                                    </div>
                                    <h3 className="relative z-10 mb-3 text-xl font-semibold text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="relative z-10 text-gray-300">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative z-10 w-full px-6 py-20 md:px-12">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeIn" }}
                            className="mb-6 text-3xl font-bold text-white md:text-4xl"
                        >
                            Ready to Sync Your Success?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                ease: "easeIn",
                                delay: 0.1,
                            }}
                            className="mb-8 text-lg text-gray-300 md:text-xl"
                        >
                            Join thousands of merchants who are already scaling
                            their business with Enigma Sync.
                        </motion.p>
                        <motion.a
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                ease: "easeIn",
                                delay: 0.2,
                            }}
                            href="http://app.enigmaedge.engineering/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-block overflow-hidden rounded-full bg-linear-to-r from-gray-900 to-gray-950 px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(55,65,81,0.8)]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Get Started Today
                                <svg
                                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-slate-700 to-slate-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </motion.a>
                    </div>
                </section>

                {/* Footer */}
                <motion.footer
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeIn" }}
                    className="relative z-10 w-full border-t border-white/20 px-6 py-8 md:px-12"
                >
                    <div className="mx-auto max-w-7xl text-center text-gray-400">
                        <p>
                            © {new Date().getFullYear()} Enigma Edge
                            Engineering. All rights reserved.
                        </p>
                    </div>
                </motion.footer>
            </div>
        </div>
    );
}
