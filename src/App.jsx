import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Leaf, Truck, Heart, Phone, Mail, Facebook, MapPin, Clock } from 'lucide-react'
import './App.css'

// Import images
import logoImg from './assets/logo.jpg'
import templateImg from './assets/Template.jpg'
import drThakre from './assets/Pappa.jpg'

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919850357066', '_blank')
  }

  const handleCallClick = () => {
    window.open('tel:+919850357066', '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={logoImg} alt="Amrutbhumi Organic Farm Logo" className="h-12 w-12 rounded-full" />
              <div>
                <h1 className="text-xl font-bold organic-green">Amrutbhumi</h1>
                <p className="text-sm text-muted-foreground">Organic Farm</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About Us</a>
              <a href="#vegetables" className="text-foreground hover:text-primary transition-colors">Our Vegetables</a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button onClick={handleWhatsAppClick} className="btn-organic bg-primary hover:bg-primary/90">
              Order via WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Pure, Safe, Organic Vegetables Delivered to Your Nagpur Home
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Join the Amrutbhumi family and choose health, delivered weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 btn-organic text-lg px-8 py-3"
                >
                  Order via WhatsApp
                </Button>
                <Button 
                  onClick={handleCallClick}
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
                >
                  Call Us Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={templateImg} 
                alt="Fresh Organic Vegetables Box" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold organic-green mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to bringing you the purest, safest organic vegetables straight from our farm to your table.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 organic-green">100% Chemical-Free</h3>
                <p className="text-muted-foreground">
                  We use zero pesticides or harmful chemicals. Just pure, natural goodness grown with care and love.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 organic-green">Convenient Weekly Delivery</h3>
                <p className="text-muted-foreground">
                  Get a basket of fresh, seasonal vegetables delivered to your doorstep every week without any hassle.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 organic-green">Trusted by Families</h3>
                <p className="text-muted-foreground">
                  We are local producers committed to the health of our Nagpur community. Your trust is our priority.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold organic-green mb-8">Our Philosophy</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tired of worrying about what's in your food? We were too. Amrutbhumi was born from a simple belief: 
            every family deserves access to food that is safe, healthy, and nourishing. We manage the entire process, 
            from our farm to your table, ensuring complete purity and transparency in everything we do.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 light-green-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold organic-green mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">
              Real families, real experiences with Amrutbhumi Organic Farm
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="testimonial-card p-6 transition-all duration-300">
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 italic">
                  "As a mother, knowing the food I give my children is free from chemicals gives me immense peace of mind. 
                  The vegetables from Amrutbhumi are not just fresh, they are a promise of health."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold organic-green">Suwarna Jadhav</p>
                    <p className="text-sm text-muted-foreground">Nagpur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="testimonial-card p-6 transition-all duration-300">
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 italic">
                  "You can taste the difference! The carrots are sweeter, the spinach is richer. 
                  It's like discovering the real taste of vegetables for the first time. Truly fantastic quality."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">SG</span>
                  </div>
                  <div>
                    <p className="font-semibold organic-green">Sai Gaikwad</p>
                    <p className="text-sm text-muted-foreground">Nagpur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="testimonial-card p-6 transition-all duration-300">
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 italic">
                  "With my busy schedule, getting fresh organic produce was always a challenge. 
                  Amrutbhumi's weekly delivery is a lifesaver. It's reliable, convenient, and the quality is unmatched."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">SS</span>
                  </div>
                  <div>
                    <p className="font-semibold organic-green">Sneha Shambharkar</p>
                    <p className="text-sm text-muted-foreground">Nagpur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="testimonial-card p-6 transition-all duration-300">
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 italic">
                  "Finally, I have peace of mind knowing my family's vegetables are completely chemical-free. 
                  The freshness and purity from Amrutbhumi are unmatched. So grateful for this trustworthy service in Wardha!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">SG</span>
                  </div>
                  <div>
                    <p className="font-semibold organic-green">Atharva Datey</p>
                    <p className="text-sm text-muted-foreground">Wardha</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="testimonial-card p-6 transition-all duration-300">
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 italic">
                  "I trust Dr. Thakre's mission completely. Knowing the person who grows your food makes all the difference. 
                  This is a transparent and trustworthy service that Nagpur needed."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold organic-green">Smita Rannaware</p>
                    <p className="text-sm text-muted-foreground">Nagpur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="testimonial-card p-6 transition-all duration-300">
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 italic">
                  "Amrutbhumi's home delivery is a lifesaver for my busy schedule. 
                  The vegetables are always incredibly fresh and taste so much better than store-bought. It’s the perfect blend of convenience and quality."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">SG</span>
                  </div>
                  <div>
                    <p className="font-semibold organic-green">Manish Thakre</p>
                    <p className="text-sm text-muted-foreground">Pune</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold organic-green mb-6">Our Farm, Our Promise</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Amrutbhumi Organic Farm was founded by Dr. Ashish R. Thakre with a vision to provide families 
                  in Nagpur with access to pure, chemical-free vegetables. Our journey began from a deep concern 
                  about the harmful effects of chemical fertilizers and pesticides on our health and environment.
                </p>
                <p>
                  We believe that healthy food should not be a luxury but a fundamental right for every family. 
                  That's why we've dedicated ourselves to sustainable and ethical farming practices that not only 
                  produce the finest organic vegetables but also protect our precious soil and water resources.
                </p>
                <p>
                  Every vegetable that leaves our farm is a testament to our commitment to your health and well-being. 
                  We manage the entire process from seed to harvest, ensuring that what reaches your table is nothing 
                  but pure, nutritious goodness.
                </p>
                <p>
                  Our mission extends beyond just growing vegetables – we're building a healthier community, 
                  one family at a time, by making organic produce accessible and affordable for everyone in Nagpur.
                </p>
              </div>
            </div>
            <div className="text-center">
              <img 
                src={drThakre} 
                alt="Dr. Ashish R. Thakre - Founder of Amrutbhumi Organic Farm" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
              <p className="mt-4 text-sm text-muted-foreground">
                Dr. Ashish R. Thakre<br />
                Founder, Amrutbhumi Organic Farm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vegetables Section */}
      <section id="vegetables" className="py-20 light-green-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold organic-green mb-4">Fresh From Our Farm This Season</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our vegetable box changes weekly based on what is freshest and in season. 
              This ensures you always get the best variety and nutrition.
            </p>
          </div>
          
          <div className="text-center mb-12">
            <img 
              src={templateImg} 
              alt="Seasonal Organic Vegetables" 
              className="rounded-lg shadow-lg mx-auto max-w-2xl w-full"
            />
          </div>
          
          <div className="text-center">
            <Card className="max-w-2xl mx-auto p-8">
              <CardContent className="pt-0">
                <p className="text-lg text-muted-foreground mb-6">
                  For this week's box contents and to learn more about our seasonal offerings, 
                  please contact us on WhatsApp or give us a call.
                </p>
                <Button onClick={handleWhatsAppClick} size="lg" className="btn-organic">
                  Check This Week's Box
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold organic-green mb-4">Getting Fresh Vegetables is as Easy as 1-2-3</h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to start your journey towards healthier eating
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 organic-green">Contact Us</h3>
              <p className="text-muted-foreground">
                Give us a call or send a message on WhatsApp. We'll explain the weekly subscription 
                and answer all your questions about our organic vegetables.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 organic-green">We Harvest & Pack</h3>
              <p className="text-muted-foreground">
                We harvest the freshest vegetables from our farm, sort them with care, 
                and pack your weekly box with love and attention to quality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 organic-green">Delivered to Your Doorstep</h3>
              <p className="text-muted-foreground">
                Your box of health and freshness is delivered directly to your home 
                on a fixed day each week. Enjoy pure, organic goodness!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 light-green-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold organic-green mb-4">Start Your Journey to Health Today</h2>
            <p className="text-lg text-muted-foreground">
              Ready to experience the difference of truly organic vegetables? Get in touch with us!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold organic-green mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Phone Numbers</p>
                    <p className="text-muted-foreground">
                      <a href="tel:+919850357066" className="hover:text-primary transition-colors">9850357066</a> | 
                      <a href="tel:+919309275071" className="hover:text-primary transition-colors ml-1">9309275071</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">
                      <a href="mailto:amrutbhumi@gmail.com" className="hover:text-primary transition-colors">
                        amrutbhumi@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Facebook className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Facebook</p>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://facebook.com/AmrutbhumiOrganicNagpur" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        facebook.com/AmrutbhumiOrganicNagpur
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Nagpur, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Operating Hours</p>
                    <p className="text-muted-foreground">Mon - Sat, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button onClick={handleWhatsAppClick} size="lg" className="btn-organic mr-4">
                  WhatsApp Us
                </Button>
                <Button onClick={handleCallClick} variant="outline" size="lg">
                  Call Now
                </Button>
              </div>
            </div>
            
            <div>
              <Card className="p-6">
                <CardContent className="pt-0">
                  <h3 className="text-xl font-semibold organic-green mb-4">Send us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input placeholder="Your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us about your requirements or ask any questions..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full btn-organic">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make the Switch to Organic?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join hundreds of families in Nagpur who have already chosen health, purity, and peace of mind 
            with Amrutbhumi Organic Farm. Your journey to better health starts with a simple call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 btn-organic text-lg px-8 py-3"
            >
              Start Your Subscription
            </Button>
            <Button 
              onClick={handleCallClick}
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              Call Dr. Thakre
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoImg} alt="Amrutbhumi Logo" className="h-10 w-10 rounded-full" />
                <div>
                  <h3 className="text-xl font-bold">Amrutbhumi</h3>
                  <p className="text-green-200">Organic Farm</p>
                </div>
              </div>
              <p className="text-green-100">
                Committed to delivering pure, organic, and safe vegetables to your doorstep. 
                Your health is our priority.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-green-100">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#vegetables" className="hover:text-white transition-colors">Our Vegetables</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-green-100">
                <p>Dr. Ashish R. Thakre</p>
                <p>Nagpur, Maharashtra</p>
                <p>Phone: 9850357066, 9309275071</p>
                <p>Email: amrutbhumi@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-600 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2025 Amrutbhumi Organic Farm. All rights reserved. | Organic • Healthy • Safe</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

