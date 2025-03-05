import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';


import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrls: ['./wave-audio.component.css']
})
export class WaveAudioComponent {
  // audioUrl! permite que no te avise que no está inicializado para que tu lo hagas concientemente
  @Input({required:true}) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;
  private ws!: WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit(){
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    });

    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));
    
  }

  playPause(){
    this.ws.playPause();
  }
}
