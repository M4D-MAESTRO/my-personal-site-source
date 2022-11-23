import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SkillDto } from '../../../interfaces/skills/skills.dto';
import { ASSETS_CONFIG } from '../../../../../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  list(): Observable<SkillDto[]> {
    return this.http.get<SkillDto[]>(`${ASSETS_CONFIG.baseURL}/skills.json`)
  }
}
