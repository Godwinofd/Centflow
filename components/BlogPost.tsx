
import React, { useEffect } from 'react';
import { BLOG_POSTS } from '../data/blogPosts';

interface BlogPostProps {
    postId: string;
    onNavigate: (page: string) => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ postId, onNavigate }) => {
    const post = BLOG_POSTS.find(p => p.id === postId);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [postId]);

    if (!post) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-500 font-jura uppercase tracking-widest text-sm mb-6">Post not found</p>
                    <button onClick={() => onNavigate('Blog')} className="text-primary font-jura uppercase tracking-widest text-xs hover:underline">
                        ← Back to Insights
                    </button>
                </div>
            </div>
        );
    }

    // Find adjacent posts for navigation
    const currentIndex = BLOG_POSTS.findIndex(p => p.id === postId);
    const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
    const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

    return (
        <div className="bg-black min-h-screen">
            {/* Hero Image */}
            <div className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
                <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                {/* Back button */}
                <div className="absolute top-6 left-6 z-10">
                    <button
                        onClick={() => onNavigate('Blog')}
                        className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold font-jura text-white uppercase tracking-widest hover:border-primary/50 transition-all"
                    >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Insights
                    </button>
                </div>

                {/* Article header */}
                <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-12">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-[9px] font-bold font-jura text-primary tracking-widest uppercase">
                                {post.category}
                            </span>
                            <span className="text-[10px] font-jura text-gray-500 tracking-widest uppercase">{post.date}</span>
                            <span className="text-[10px] font-jura text-gray-500 tracking-widest uppercase">{post.readTime}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-anton text-white uppercase tracking-tight leading-[1] mb-2">
                            {post.title}
                        </h1>
                        <p className="text-[10px] font-jura text-gray-600 tracking-[0.4em] uppercase mt-4">
                            System_Log: {post.id} · Centflow Growth Intelligence
                        </p>
                    </div>
                </div>
            </div>

            {/* Article Body */}
            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="max-w-3xl mx-auto">

                    {/* Intro */}
                    <p className="text-gray-300 font-sf text-lg md:text-xl font-light leading-relaxed mb-16 border-l-4 border-primary/40 pl-8">
                        {post.intro}
                    </p>

                    {/* Sections */}
                    <div className="space-y-14">
                        {post.sections.map((section, i) => (
                            <div key={i}>
                                <h2 className="text-xl md:text-2xl font-bold font-jura text-white uppercase tracking-tight mb-6 flex items-start gap-4">
                                    <span className="text-primary text-sm font-jura mt-1 flex-shrink-0">0{i + 1}</span>
                                    {section.heading}
                                </h2>
                                <div className="space-y-5">
                                    {section.body.split('\n\n').map((para, j) => (
                                        <p key={j} className="text-gray-400 font-sf text-base md:text-[17px] font-light leading-[1.85]">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Conclusion */}
                    <div className="mt-16 p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-3xl">
                        <p className="text-[10px] font-bold font-jura text-primary uppercase tracking-[0.4em] mb-4">Conclusion</p>
                        <p className="text-gray-300 font-sf text-base md:text-[17px] font-light leading-relaxed">
                            {post.conclusion}
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 p-8 md:p-12 bg-primary/5 border border-primary/20 rounded-3xl text-center">
                        <p className="text-[10px] font-bold font-jura text-primary uppercase tracking-[0.4em] mb-3">Ready to apply this?</p>
                        <h3 className="text-2xl md:text-3xl font-bold font-anton text-white uppercase tracking-tight mb-4">
                            Book a Discovery Call
                        </h3>
                        <p className="text-gray-500 font-sf text-sm font-light mb-8 max-w-md mx-auto leading-relaxed">
                            We'll review your current setup, identify where growth is being lost, and outline exactly what we'd change.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://calendar.app.google/nxhNSQ1mE7rXg7Lu7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4 bg-primary text-white font-bold text-xs rounded-full font-jura uppercase tracking-[0.3em] hover:shadow-[0_0_40px_rgba(45,71,255,0.5)] transition-all"
                            >
                                Book a Discovery Call
                            </a>
                            <button
                                onClick={() => onNavigate('Get In Touch')}
                                className="px-8 py-4 border border-white/10 text-white font-bold text-xs rounded-full font-jura uppercase tracking-[0.3em] hover:border-primary/50 transition-all"
                            >
                                Send an Enquiry
                            </button>
                        </div>
                    </div>

                    {/* Post navigation */}
                    <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {prevPost ? (
                            <button
                                onClick={() => onNavigate(`blog-${prevPost.id}`)}
                                className="group flex flex-col items-start p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-primary/30 transition-all text-left"
                            >
                                <span className="text-[9px] font-jura text-gray-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                    Previous
                                </span>
                                <span className="text-sm font-bold font-jura text-white uppercase tracking-tight leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                    {prevPost.title}
                                </span>
                            </button>
                        ) : <div />}

                        {nextPost ? (
                            <button
                                onClick={() => onNavigate(`blog-${nextPost.id}`)}
                                className="group flex flex-col items-end p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-primary/30 transition-all text-right"
                            >
                                <span className="text-[9px] font-jura text-gray-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    Next
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </span>
                                <span className="text-sm font-bold font-jura text-white uppercase tracking-tight leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                    {nextPost.title}
                                </span>
                            </button>
                        ) : <div />}
                    </div>

                </div>
            </div>
        </div>
    );
};
