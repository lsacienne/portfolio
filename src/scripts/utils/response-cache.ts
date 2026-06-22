export abstract class KeyTypeConverter<KeyType> {
  constructor() {}

  abstract keyToString(key: KeyType): string;
}

export class ResponseCache<KeyType, EntryType> {
  private readonly innerMap = new Map<string, EntryType>();

  constructor(private readonly keyTypeConverter: KeyTypeConverter<KeyType>) {}

  set(key: KeyType, value: EntryType): void {
    this.innerMap.set(this.keyTypeConverter.keyToString(key), value);
  }

  get(key: KeyType): EntryType | undefined {
    return this.innerMap.get(this.keyTypeConverter.keyToString(key));
  }

  has(key: KeyType): boolean {
    return this.innerMap.has(this.keyTypeConverter.keyToString(key));
  }

  get size(): number {
    return this.innerMap.size;
  }
}
