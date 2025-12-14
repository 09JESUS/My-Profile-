'use client'
import confetti from 'canvas-confetti';
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Mail, Phone, ExternalLink, Code2, Monitor, Server, Award, Users, Briefcase, GraduationCap, Send, Wrench, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'



export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const skills = {
    'IT Support & Technical': ['Windows/Linux OS', 'Hardware Troubleshooting', 'Network Configuration', 'System Administration', 'Remote Support'],
    'Web & App Development': ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    'Backend & Programming': ['Python', 'Java', 'C++', 'C#', 'Flask', 'SQL'],
    'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Microsoft Office', 'Chart.js'],
    'Networking & Security': ['TCP/IP', 'DNS', 'DHCP', 'VPN', 'Firewalls', 'Endpoint Security']
  }

  const projects = [
    {
      title: 'FSolution Investment App',
      description: 'Responsive investment management platform enabling users to add/update investments, track historical performance with Chart.js visualizations, calculate potential returns, and explore insurance coverage options.',
      tags: ['React.js', 'Flask', 'SQL', 'Chart.js'],
      github: 'https://github.com/09JESUS/FSolution-Investment-App',
      demo: null,
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FSolution-Investment-App.PNG-aTLY2AwLRXGkG7xXYJICrUZOGvi9mW.png'
    },
    {
      title: 'COVID-19 Tracker',
      description: 'Real-time COVID-19 data tracking application with global and country-level statistics. Features interactive dashboard with data visualization for trends, daily case counts, recoveries, and fatalities with responsive design.',
      tags: ['TypeScript', 'React', 'Next.js', 'API Integration', 'HTML5', 'CSS3'],
      github: 'https://github.com/09JESUS/Covid-19-Tracker',
      demo: null,
      image: '/covid-tracker-dashboard.jpg'
    },
    {
      title: 'C++ File Organizer (Python)',
      description: 'Desktop file management utility that automatically organizes files into categories (documents, media, executables). Features directory traversal automation to reduce manual effort with scalable and reusable architecture.',
      tags: ['Python', 'File Management', 'Automation'],
      github: 'https://github.com/09JESUS/C-PLUS-PLUS-File-Organizer',
      demo: null,
      image: '/file-organizer-interface.jpg'
    }
  ]

  const experience = [
    {
      title: 'Data Structures & Algorithms Tutor',
      company: 'North-West University',
      location: 'Vanderbijlpark, Gauteng',
      period: 'June 2025 - Nov 2025',
      description: [
        'Mentored 30 students in Data Structures and Algorithms using Java, achieving an impressive 82% pass rate',
        'Taught fundamental data structures including arrays, linked lists, stacks, queues, trees, graphs, and hash tables',
        'Explained algorithm design techniques such as recursion, dynamic programming, divide-and-conquer, and greedy algorithms',
        'Guided students through Big O notation, time/space complexity analysis, and algorithmic optimization strategies',
        'Demonstrated practical implementations of sorting algorithms (QuickSort, MergeSort, HeapSort) and search algorithms (Binary Search, BFS, DFS)',
        'Helped students master advanced concepts including balanced trees (AVL, Red-Black), graph algorithms (Dijkstra, Kruskal), and problem-solving patterns',
        'Conducted hands-on coding sessions to reinforce algorithm efficiency and data structure selection for real-world scenarios'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Google Technical Support Professional Certificate',
      issuer: 'Google/Coursera',
      year: '2024',
      description: 'Comprehensive IT support training covering installation, configuration, troubleshooting, and system administration'
    },
    {
      name: 'Cisco Ethical Hacker',
      issuer: 'Cisco Networking Academy',
      year: '2025',
      description: 'Ethical hacking fundamentals and security testing methodologies'
    },
    {
      name: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      year: '2024',
      description: 'Core networking concepts including TCP/IP, DNS, DHCP, VPNs, and firewalls'
    }
  ]
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null)


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFeedback(null); // reset previous feedback

  // Basic front-end validation (optional)
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    setFeedback({ message: 'Please fill in all fields.', type: 'error' });
    return;
  }

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setFeedback({ message: data.message || 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '' }); // reset form

      // 🎉 Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      // If the API returns an error
      setFeedback({ message: data.message || 'Failed to send message.', type: 'error' });
    }
  } catch (err) {
    console.error('Error sending contact form:', err);
    setFeedback({ message: 'Failed to send message. Please try again later.', type: 'error' });
  }
};





  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                FN
              </div>
              <span className="text-lg font-bold hidden sm:block">Forget Nukeri</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </div>
            <Button asChild size="sm">
              <a href="/cv" target="_blank" rel="noopener noreferrer">View CV</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-6">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
                Forget Nukeri
              </h1>
              <p className="text-2xl text-primary mb-4">Software Developer & IT Support Specialist</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                Information Technology Graduate from North-West University with hands-on experience in IT support, 
                software development, and technical leadership. Passionate about building scalable applications, solving complex technical 
                problems, and delivering user-focused solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/09JESUS" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
                
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>15 Students • 82% Pass Rate</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <Card className="relative p-8 bg-card border-primary/20">
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-primary/20">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20October%2030%2C%202025%20-%205_58AM-5m7sT58zyBKj6wiCn16fAFxun9P0hM.png"
                        alt="Forget Nukeri - Software Developer"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Code2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Full-Stack Development</h3>
                        <p className="text-sm text-muted-foreground">React, Next.js, Python, Java, C++, SQL</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Monitor className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">IT Support & Technical Services</h3>
                        <p className="text-sm text-muted-foreground">System administration, troubleshooting, hardware/software installation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Server className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Networking & Infrastructure</h3>
                        <p className="text-sm text-muted-foreground">TCP/IP, DNS, DHCP, VPN, firewall configuration</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-primary mb-2">INTRODUCTION</h2>
            <h3 className="text-4xl font-bold">About Me</h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                I'm an Information Technology Graduate with hands-on experience in IT support and software development. 
                Skilled in building responsive web and app solutions, applying object-oriented programming principles, 
                and managing data securely and efficiently. I've been recognized for mentoring 15 students in 
                Data Structures and Algorithms with Java, achieving an 82% pass rate while solving complex technical problems 
                and delivering well-structured, user-focused projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                My technical expertise spans full-stack development with React, Python, Java, and C++, combined with 
                strong IT support capabilities including system administration, troubleshooting, and network configuration. 
                I'm passionate about creating innovative, scalable digital solutions that solve real-world challenges and 
                deliver meaningful impact. Graduates from North-West University with a GPA of 73.49%.
              </p>
            </div>
            <Card className="p-6 bg-card h-fit">
              <h4 className="font-semibold mb-4">Quick Facts</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span>BSc IT, NWU (Completed 2025)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>RCL Public Relations Officer (2020-2020)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span>DSA Tutor • 82% Pass Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-primary" />
                  <span>IT Support & Troubleshooting</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-primary mb-2">BACKGROUND</h2>
            <h3 className="text-4xl font-bold">Experience</h3>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                    <p className="text-muted-foreground">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-sm text-primary mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Certifications</h3>
              <Button variant="outline" asChild>
                <a 
                  href="https://www.linkedin.com/in/forget-nukeri-5b3228287/details/certifications/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  View All Certificates
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary">{cert.year}</Badge>
                  </div>
                  <h4 className="font-semibold mb-2 text-balance">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground text-pretty">{cert.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-primary mb-2">PORTFOLIO</h2>
            <h3 className="text-4xl font-bold">Featured Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden flex flex-col hover:border-primary/50 transition-colors group">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 flex-grow text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-sm font-semibold text-primary mb-2">CAPABILITIES</h2>
            <h3 className="text-4xl font-bold">Technical Skills</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <Card key={index} className="p-6">
                <h4 className="font-semibold mb-4 text-lg">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <Badge key={i} variant="outline" className="border-primary/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Core Competencies</h3>
            <Card className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Excellent communication and interpersonal skills</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Strong attention to detail and organizational skills</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Effective communication with end-users</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Problem-solving abilities</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Proactive and eager to learn new technologies</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Time management and prioritization</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-sm font-semibold text-primary mb-2">GET IN TOUCH</h2>
            <h3 className="text-4xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-lg text-muted-foreground text-balance">
              I'm actively seeking opportunities in software development and IT support. Let's discuss how I can 
              contribute to your team with my technical expertise and problem-solving skills.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:forgetnukeri585@gmail.com" className="text-primary hover:underline">
                    forgetnukeri585@gmail.com
                  </a>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+27762852630" className="text-primary hover:underline">
                    +27 76 285 2630
                  </a>
                </div>
              </div>
            </Card>
          </div>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
              {feedback && (
  <p className={`mt-4 text-sm font-medium ${feedback.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
    {feedback.message}
  </p>
)}

            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Forget Nukeri. Built with passion for technology.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/09JESUS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/forget-nukeri-5b3228287/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:forgetnukeri585@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
