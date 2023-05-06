import { rem } from './utils'

export class TypographicScale {
  public readonly factor: number

  constructor(factor: number) {
    if (factor <= 1) {
      throw new Error('Scale factor must be greater than 1')
    }
    this.factor = factor
  }

  public get(offset: number): number {
    return Math.pow(this.factor, offset)
  }

  public intoRem(base: number): RemTypographicScale {
    return new RemTypographicScale(this, base)
  }
}

class RemTypographicScale {
  private readonly scale: TypographicScale
  public readonly factor: number
  public readonly base: number

  constructor(scale: TypographicScale, base: number) {
    this.scale = scale
    this.factor = scale.factor
    this.base = base
  }

  public get(offset: number): string {
    return rem(this.base * this.scale.get(offset))
  }
}
