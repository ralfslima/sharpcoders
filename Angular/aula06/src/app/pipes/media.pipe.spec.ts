import { MediaPipe } from './media.pipe';

describe('MediaPipe', () => {
  it('create an instance', () => {
    const pipe = new MediaPipe();
    expect(pipe).toBeTruthy();
  });
});
