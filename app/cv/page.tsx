import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, Phone, Linkedin, Github, MapPin, GraduationCap, Award, Briefcase, Code2, Download } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 pb-8 border-b border-border">
            <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20October%2030%2C%202025%20-%205_58AM-5m7sT58zyBKj6wiCn16fAFxun9P0hM.png"
                alt="Forget Nukeri"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">Forget Nukeri</h1>
              <p className="text-xl text-primary mb-4">Software Developer & IT Support Specialist</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+27 76 285 2630</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:forgetnukeri585@gmail.com" className="hover:text-primary">
                    forgetnukeri585@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Gauteng</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/forget-nukeri-5b3228287/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/09JESUS" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/">Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Profile */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              Profile
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Information Technology Graduate with hands-on experience in IT support and software development. 
              Skilled in building responsive web and app solutions, applying object-oriented programming principles, 
              and managing data securely and efficiently. Recognized for mentoring peers, solving complex technical 
              problems, and delivering well-structured, user-focused projects. Passionate about creating innovative, 
              scalable digital solutions that solve real-world challenges and deliver meaningful impact.
            </p>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Bachelor of Science in Information Technology</h3>
                    <p className="text-muted-foreground">North West University | Vanderbijilpark, Gauteng</p>
                    <p className="text-sm text-muted-foreground">Feb 2022 – Nov 2025 | GPA: 73.49%</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                <div className="space-y-3 ml-8">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold">Google Technical Support Professional Certificate</h4>
                    <p className="text-sm text-muted-foreground">Google | Administered by Coursera (2024)</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold">Google Cybersecurity Professional Certificate</h4>
                    <p className="text-sm text-muted-foreground">Google | Administered by Coursera (2024)</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold">Cisco Ethical Hacker</h4>
                    <p className="text-sm text-muted-foreground">Cisco Networking Academy (2025)</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold">Networking Basics</h4>
                    <p className="text-sm text-muted-foreground">Cisco Networking Academy</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Achievements</h3>
                <p className="text-muted-foreground ml-8">Representative Council of Learners (RCL) – Public Relations Officer (Jan 2023 – Dec 2024)</p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              Professional Experience
            </h2>
            <div className="flex items-start gap-3">
              <Briefcase className="h-5 w-5 text-primary mt-1" />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Student Assistant</h3>
                    <p className="text-muted-foreground">North West University</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Jan 2024 – Dec 2024</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Assisted 150+ students with Java OOP assignments, debugging, and project guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Explained OOP concepts such as classes, inheritance, polymorphism, and encapsulation in a simplified manner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Helped students understand and implement object-oriented design principles in real-world scenarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Conducted lab demonstrations and reviewed code for quality and best practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              Projects
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3">
                  <Code2 className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">FSolution Investment App</h3>
                    <p className="text-sm text-primary mb-2">React.js, Flask, SQL, Chart.js</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Enabled users to add and update investments and track historical performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Implemented data visualization using charts to display investment trends and returns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Integrated features for calculating potential returns and exploring insurance coverage options</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <Code2 className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Covid 19 Tracker</h3>
                    <p className="text-sm text-primary mb-2">TypeScript, JavaScript, React, Next.js, HTML5, CSS3</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Built a real-time COVID-19 data tracking application with global and country-level statistics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Integrated an external API to fetch daily case counts, recoveries, and fatalities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Designed an interactive dashboard with data visualization for trends and analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Ensured responsive design for accessibility across devices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <Code2 className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">C++ File Organizer</h3>
                    <p className="text-sm text-primary mb-2">Python (Organizes desktop)</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Developed a file management utility that organizes files into categories (e.g., documents, media, executables)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Implemented file handling and directory traversal to automate sorting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Improved efficiency by reducing manual effort in managing large sets of files</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Focused on scalability and reusability, making it adaptable for different folder structures</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">IT Support</h4>
                    <p className="text-sm text-muted-foreground">Installation, configuration, troubleshooting, updating of operating systems and applications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Web & App Development</h4>
                    <p className="text-sm text-muted-foreground">React.js, Flask, Responsive Design</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Cybersecurity Basics</h4>
                    <p className="text-sm text-muted-foreground">Endpoint security, password management, and antivirus software</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Programming Languages</h4>
                    <p className="text-sm text-muted-foreground">Python, Java, C++, C#, SQL, JavaScript (React), HTML5, CSS3</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Networking</h4>
                    <p className="text-sm text-muted-foreground">Basic knowledge of TCP/IP, DNS, DHCP, VPNs, and firewalls</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Tools & Platforms</h4>
                    <p className="text-sm text-muted-foreground">Git, GitHub, VS Code, Microsoft Office</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Core Competencies</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Excellent communication and interpersonal skills, enabling effective teamwork</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Strong attention to detail and organizational skills</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Communicating effectively with end-users and non-technical staff</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Problem-solving abilities</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Proactive and eager to learn new technologies</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Time management and prioritization to handle multiple tasks</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              Additional Information
            </h2>
            <p className="text-muted-foreground"><strong>Languages:</strong> English, isiZulu, Xitsonga</p>
          </section>

          {/* References */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              References
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-sm">
                <p className="font-semibold">Mr Vusi Ntiyiso Masingi</p>
                <p className="text-muted-foreground">Lecturer, North West University</p>
                <p className="text-primary">44746555@g.nwu.ac.za</p>
                <p className="text-muted-foreground">(079) 241 2441</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold">Mr Luke Coetzee</p>
                <p className="text-muted-foreground">Lecturer, North West University</p>
                <p className="text-primary">luke.Coetzee@nwu.ac.za</p>
                <p className="text-muted-foreground">(016) 910 3270</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold">Mr Andrew Joubert</p>
                <p className="text-muted-foreground">Manager, Vaal Student Housing</p>
                <p className="text-muted-foreground">(082) 379 2094</p>
              </div>
            </div>
          </section>

          {/* Back to Portfolio Button */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <Button size="lg" asChild>
              <Link href="/">Back to Portfolio</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
