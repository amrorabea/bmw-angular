import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BMW Website';

  ngOnInit() {
    this.initializeAnimations();
  }

  private initializeAnimations() {
    // Wait for DOM to be fully loaded
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      // Observe sections and elements that need animations
      document.querySelectorAll('section, .model-card, .innovation-card, .number, .about-content, .contact-info, .contact-form')
        .forEach(element => observer.observe(element));

      // Add animation delays to cards
      document.querySelectorAll('.model-card').forEach((card, index) => {
        (card as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
      });

      document.querySelectorAll('.innovation-card').forEach((card, index) => {
        (card as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
      });
    }, 100);
  }

  // Optional: Add smooth scrolling for navigation links
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Optional: Add form handling
  onSubmit(event: Event) {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  }
}
