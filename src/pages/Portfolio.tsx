import { Github, Linkedin, Mail, FileText, PenTool } from "lucide-react";
import { SocialLink } from "@/components/SocialLink";
import { SkillTag } from "@/components/SkillTag";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogPost } from "@/components/BlogPost";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

import avatarImage from "@/assets/avatar.jpg";
import dronewerxImage from "@/assets/dronewerx-new.jpg";
import pdfchatbotImage from "@/assets/pdfchatbot-new.jpg";
import blogrealmImage from "@/assets/blogrealm-new.jpg";
import adgenieImage from "@/assets/adgenie.jpg";
import hospimanageImage from "@/assets/hospimanage.jpg";
import realtimepdtImage from "@/assets/realtimepdt.jpg";
import vidstreamImage from "@/assets/vidstream.jpg";
import housingVisualizationImage from "@/assets/housing-visualization.jpg";
import travopalImage from "@/assets/travopal.jpg";

const skills = [
  "TypeScript", "JavaScript", "Python", "Java", 
  "React", "Next.js", "Node.js", "Express.js",
  "Docker", "AWS", "Firebase", "Supabase",
  "PostgreSQL", "MySQL", "MongoDB", "CI/CD", "GitHub Actions",
  "LangChain", "OpenAI API", "Gemini AI",
  "YOLOv8", "TensorFlow", "PyTorch", "Hugging Face",
  "Figma", "Tailwind CSS", "REST APIs", "GraphQL"
];


const projects = [
  {
    title: "DroneWERX",
    description: "AI-powered defense collaboration platform that enables seamless coordination between military units using advanced drone technology and real-time data analytics.",
    image: dronewerxImage,
    technologies: ["Python", "AI/ML", "Real-time Analytics", "Defense Tech"],
    githubUrl: "https://github.com/Yash-Bobde/DroneWERX"
  },
  {
    title: "PDFChatBot",
    description: "Intelligent document Q&A system powered by Google Gemini and Supabase that allows users to chat with their PDFs and extract insights through natural language queries.",
    image: pdfchatbotImage,
    technologies: ["React", "Gemini AI", "Supabase", "TypeScript"],
    githubUrl: "https://github.com/Yash-Bobde/PDFChatBot"
  },
  {
    title: "BlogRealm",
    description: "AI-based content recommendation system that personalizes blog discovery using machine learning algorithms to match reader preferences with relevant content.",
    image: blogrealmImage,
    technologies: ["Next.js", "AI/ML", "Recommendation Engine", "PostgreSQL"],
    githubUrl: "https://github.com/Yash-Bobde/BlogRealm"
  },
  {
    title: "AdGenie",
    description: "Automated ad personalization system that uses machine learning to optimize advertising campaigns and improve user engagement through intelligent targeting.",
    image: adgenieImage,
    technologies: ["Python", "Machine Learning", "Ad Tech", "Automation"],
    githubUrl: "https://github.com/Yash-Bobde/AdGenie-Auto-Ad-Personalization"
  },
  {
    title: "HospiManage",
    description: "Comprehensive hospital management system that streamlines patient care, staff scheduling, and resource allocation through an intuitive digital platform.",
    image: hospimanageImage,
    technologies: ["React", "Node.js", "MongoDB", "Healthcare"],
    githubUrl: "https://github.com/Yash-Bobde/HospiManage"
  },
  {
    title: "RealTimePDT",
    description: "Real-time person detection and tracking system using advanced computer vision algorithms for security and surveillance applications.",
    image: realtimepdtImage,
    technologies: ["Python", "OpenCV", "YOLOv8", "Computer Vision"],
    githubUrl: "https://github.com/Yash-Bobde/RealTimePDT-Person-Detecting-and-Tracking-"
  },
  {
    title: "VidStream",
    description: "Video streaming platform with adaptive quality control and real-time communication features for enhanced user experience.",
    image: vidstreamImage,
    technologies: ["React", "WebRTC", "Node.js", "Streaming"],
    githubUrl: "https://github.com/Yash-Bobde/VidStream"
  },
  {
    title: "RentVisualization",
    description: "Interactive data visualization dashboard analyzing US housing rent trends with comprehensive market insights and predictive analytics.",
    image: housingVisualizationImage,
    technologies: ["Python", "Data Visualization", "Analytics", "Plotly"],
    githubUrl: "https://github.com/Yash-Bobde/USHousingRentVisualization"
  },
  {
    title: "TravoPal",
    description: "Intelligent travel companion app that provides personalized recommendations, itinerary planning, and real-time travel assistance.",
    image: travopalImage,
    technologies: ["React Native", "AI/ML", "Travel Tech", "Mobile"],
    githubUrl: "https://github.com/Yash-Bobde/TravoPal"
  }
];

const blogPosts = [
  {
    title: "Initial Final Project: Landmark Recognition",
    excerpt: "Introduction to landmark recognition project using computer vision and machine learning techniques for identifying famous landmarks and monuments.",
    date: "Dec 8, 2024",
    readTime: "6 min",
    url: "https://medium.com/@yashmanish.bobde",
    platform: "Medium"
  },
  {
    title: "Final Project Proposal: Monument Recognition for Tourist Apps",
    excerpt: "Main project idea or theme exploring monument recognition capabilities for enhancing tourist applications with AI-powered identification features.",
    date: "Nov 10, 2024", 
    readTime: "8 min",
    url: "https://medium.com/@yashmanish.bobde",
    platform: "Medium"
  },
  {
    title: "Person Detection(Yolov8x) & Tracking(DeepSORT) in Video Streams",
    excerpt: "NOTE: Medium did not allow us to upload GIFs/Video outputs of 10-15 seconds. Implementation of real-time person detection and tracking using YOLOv8x and DeepSORT algorithms.",
    date: "Oct 21, 2024",
    readTime: "10 min",
    url: "https://medium.com/@yashmanish.bobde",
    platform: "Medium"
  },
  {
    title: "ASCII Art Generator",
    excerpt: "The term 'ASCII art' is a graphic form of art originally based on the use of characters from the ASCII character set in generating creative visual representations.",
    date: "Sep 29, 2024",
    readTime: "5 min",
    url: "https://medium.com/@yashmanish.bobde",
    platform: "Medium"
  },
  {
    title: "Testing InternVL2's visual limitations",
    excerpt: "Multimodal Large Language Models (MLLMs) have seen rapid advancements in recent times. Despite the advancements of MLLMs, exploring their capabilities and limitations.",
    date: "Sep 8, 2024",
    readTime: "7 min",
    url: "https://medium.com/@yashmanish.bobde",
    platform: "Medium"
  },
  {
    title: "Exploring Bing's Image Description Capabilities",
    excerpt: "Are you all ready for our new exploration on Bing? Herein, we are going to discover whether Bing has optimized version of image description capabilities.",
    date: "Sep 8, 2024",
    readTime: "6 min",
    url: "https://medium.com/@yashmanish.bobde",
    platform: "Medium"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20 dark:from-background dark:via-background dark:to-primary/5">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header Section */}
        <ScrollAnimationWrapper animationType="fade" delay={100}>
          <header className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <img
              src={avatarImage}
              alt="Yash Bobde"
              className="w-32 h-32 rounded-full mx-auto shadow-medium animate-float border-4 border-card"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 animate-pulse"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Yash Bobde
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Software Engineer & AI Developer
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <SocialLink
              href="https://github.com/Yash-Bobde"
              icon={Github}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/yash-bobde"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://medium.com/@yashmanish.bobde"
              icon={PenTool}
              label="Medium"
            />
            <SocialLink
              href="mailto:yash.bobde@example.com"
              icon={Mail}
              label="Email"
            />
            <SocialLink
              href="https://drive.google.com/file/d/1NiYIuZZ9v9QJ2mjVFWiazKqFaLFe9Brx/view"
              icon={FileText}
              label="Resume"
            />
          </div>
          </header>
        </ScrollAnimationWrapper>

        {/* Introduction Section */}
        <ScrollAnimationWrapper animationType="fade-up" delay={200}>
          <section className="text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate AI/ML enthusiast and full-stack engineer with expertise in building 
              intelligent systems and modern web applications. I enjoy creating innovative 
              solutions that bridge the gap between cutting-edge technology and real-world problems, 
              specializing in machine learning, cloud architecture, and scalable software development.
            </p>
          </div>
          </section>
        </ScrollAnimationWrapper>

        {/* Skills Section */}
        <ScrollAnimationWrapper animationType="fade-up" delay={300}>
          <section className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <SkillTag 
                key={skill}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </SkillTag>
            ))}
          </div>
          </section>
        </ScrollAnimationWrapper>

        {/* Projects Section */}
        <ScrollAnimationWrapper animationType="fade-up" delay={400}>
          <section className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-12 text-foreground">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </div>
          </section>
        </ScrollAnimationWrapper>

        {/* Publications Section */}
        <ScrollAnimationWrapper animationType="fade-up" delay={500}>
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-center mb-12 text-foreground">
              Publications
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-medium transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  <a 
                    href="https://link.springer.com/chapter/10.1007/978-981-99-0601-7_36" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    SemWIRet – Springer, 2023
                  </a>
                </h3>
                <p className="text-muted-foreground">Published in Springer Conference Proceedings</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-medium transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  <a 
                    href="https://www.ijeast.com/papers/57-69,%20Tesma0802,IJEAST.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    IWEEWS – IJEAST, 2022
                  </a>
                </h3>
                <p className="text-muted-foreground">Published in International Journal of Engineering and Advanced Science Technology</p>
              </div>
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* Blog Section */}
        <ScrollAnimationWrapper animationType="fade-up" delay={600}>
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-center mb-12 text-foreground">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <ScrollAnimationWrapper
                  key={post.title}
                  animationType="scale"
                  delay={600 + index * 100}
                >
                  <BlogPost {...post} />
                </ScrollAnimationWrapper>
              ))}
            </div>
          </section>
        </ScrollAnimationWrapper>

        {/* Footer */}
        <ScrollAnimationWrapper animationType="fade" delay={700}>
          <footer className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            Built with ❤️ by Yash
          </p>
          </footer>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
