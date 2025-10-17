import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  /**
   * Genera la ruta correcta para los assets de grupos
   * Maneja automáticamente los problemas de case-sensitivity
   */
  getGroupAsset(path: string): string {
    // Asegurar que la ruta empiece con assets/grupos/
    if (!path.startsWith('assets/grupos/')) {
      path = `assets/grupos/${path}`;
    }

    // Corregir case-sensitivity conocidas
    path = this.fixCaseSensitivity(path);

    return path;
  }

  /**
   * Corrige problemas conocidos de case-sensitivity
   */
  private fixCaseSensitivity(path: string): string {
    const corrections: Record<string, string> = {
      // Carpetas con case-sensitivity específico
      'assets/grupos/ocv/': 'assets/grupos/OCV/',
      'assets/grupos/coincidir/': 'assets/grupos/Coincidir/',
      'assets/grupos/somosameca/': 'assets/grupos/SomosAmeca/',
      'assets/grupos/puntoluminoso/': 'assets/grupos/puntoLuminoso/',
      'assets/grupos/valorparacambiar/': 'assets/grupos/valorParaCambiar/',

      // Archivos específicos
      'assets/grupos/OCV/fachada1.jpeg': 'assets/grupos/OCV/FACHADA1.jpeg',
    };

    // Aplicar correcciones
    for (const [wrong, correct] of Object.entries(corrections)) {
      if (path.toLowerCase().includes(wrong.toLowerCase())) {
        path = path.replace(new RegExp(wrong, 'gi'), correct);
      }
    }

    return path;
  }

  /**
   * Verifica si un asset existe (para desarrollo)
   */
  validateAsset(path: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = path;
    });
  }
}
