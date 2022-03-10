class MessageSignLoader {
  private static _messageSign: typeof import('@emurgo/cardano-message-signing-browser');

  public static get MessageSign() {
    return MessageSignLoader._messageSign;
  }

  public static async LoadAsync(): Promise<void> {
    if (this._messageSign !== null) {
      MessageSignLoader._messageSign =  await import('@emurgo/cardano-message-signing-browser');
    }
  }
}

export default MessageSignLoader;