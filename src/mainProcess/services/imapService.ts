/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/6/4 06:15
 */
import Imap from 'imap';

export default class ImapService implements ImapServiceInterface {
  private boxName = 'emailNotes';

  private static imap: Imap;

  /**
   * 连接imap
   * @param config
   */
  public static connect(config: Imap.Config): Promise<ImapService> {
    return new Promise<ImapService>((resolve, reject) => {
      const imapInstance = new Imap(config);
      imapInstance.once('ready', () => {
        this.imap = imapInstance;
        resolve(new ImapService());
        setInterval(() => {
          this.imap.getBoxes((error, boxs) => {
            console.log(error);
            console.log(boxs);
            console.log(`${Date.now().toString()} ticker.`);
          });
        }, 1000);
      });
      imapInstance.once(
        'error',
        (err: Error) => {
          reject(err);
        },
      );
      imapInstance.connect();
    });
  }

  public hasBox(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      ImapService.imap.status(this.boxName, (error, mailbox) => {
        if (error) return reject(error);
        return resolve(true);
      });
    });
  }

  addBox(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      ImapService.imap.addBox(this.boxName, (error) => {
        if (error) return reject(error);
        return resolve();
      });
    });
  }

  openBox(): Promise<void> {
    return new Promise((resolve, reject) => {
      ImapService.imap.openBox(this.boxName, (error, box) => {
        if (error) return reject(error);
        return resolve();
      });
    });
  }
}
