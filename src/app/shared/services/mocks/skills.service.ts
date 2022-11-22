import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillDto } from '../../interfaces/skills/skills.dto';
import { ASSETS_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  listSkills(): Observable<SkillDto[]> {
    return this.http.get<SkillDto[]>(`${ASSETS_CONFIG.baseURL}/skills.json`)
  }
}
