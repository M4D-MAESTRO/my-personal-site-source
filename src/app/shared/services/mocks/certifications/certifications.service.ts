import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ASSETS_CONFIG } from '../../../../../config/api.config';
import { CertificationDto } from '../../../../../app/shared/interfaces/certifications/certification.dto';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  list(): Observable<CertificationDto[]> {
    return this.http.get<CertificationDto[]>(`${ASSETS_CONFIG.baseURL}/certifications.json`)
  }
}
