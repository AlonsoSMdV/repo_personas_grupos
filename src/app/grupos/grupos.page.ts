import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AnimationController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Paginated } from '../core/models/paginated.model';
import { Group } from '../core/models/group.model';
import { MyGroupService } from '../core/services/my-group.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {

  _group:BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);
  group$:Observable<Group[]> = this._group.asObservable();

  constructor(
    private animationCtrl: AnimationController,
    private groupSv:MyGroupService
  ) {}

  ngOnInit(): void {
    this.getMoreGroups();
  }


  @ViewChildren('avatar') avatars!: QueryList<ElementRef>;
  @ViewChild('animatedAvatar') animatedAvatar!: ElementRef;
  @ViewChild('animatedAvatarContainer') animatedAvatarContainer!: ElementRef;

  selectedGroup: any = null;
  isAnimating = false;
  page:number = 1;
  pageSize:number = 25;


  getMoreGroups(notify:HTMLIonInfiniteScrollElement | null = null) {
    this.groupSv.getAll(this.page, this.pageSize).subscribe({
      next:(response:Paginated<Group>)=>{
        console.log('data recieved', response.data);
        this._group.next([...this._group.value, ...response.data]);
        this.page++;
        
        if(notify){
          notify.complete();
        }
      },
      error: () => {
        if(notify){
          notify.complete();
        }
      }
    });
  }

  onIonInfinite(ev:InfiniteScrollCustomEvent) {
    console.log("Infinite scroll triggered");
    this.getMoreGroups(ev.target);
    
  }
}
