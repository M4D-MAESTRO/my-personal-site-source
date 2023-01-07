import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ASSETS_CONFIG } from '../../../../../config/api.config';
import { CertificationDto } from '../../../interfaces/certifications/certification.dto';
import { AplicacaoDto } from 'src/app/shared/interfaces/aplicacoes/aplicacao.dto';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  list(): Observable<AplicacaoDto[]> {
    return this.http.get<AplicacaoDto[]>(`${ASSETS_CONFIG.baseURL}/applications.json`)
  }
}
