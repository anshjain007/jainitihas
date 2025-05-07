import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  ngAfterViewInit() {
    const translateBtn = document.getElementById('translateBtn');
    let isHindi = false;
  
    translateBtn?.addEventListener('click', () => {
      isHindi = !isHindi;
      translateBtn.innerHTML = isHindi ? '<span>English</span>' : '<span>हिंदी</span>';
  
      document.querySelectorAll('[data-hindi]').forEach(el => {
        const original = el.textContent?.trim() || '';
        const hindi = el.getAttribute('data-hindi');
        if (isHindi) {
          el.setAttribute('data-original', original);
          el.textContent = hindi || '';
        } else {
          el.textContent = el.getAttribute('data-original') || original;
        }
      });
    });
  }
  
}
