/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/6/4 08:56
 */

declare interface ImapServiceInterface {
  /**
   * creates a new mailbox on the server.
   */
  addBox(): Promise<void>

  /**
   * Opens a specific mailbox tha prefix/path
   */
  openBox(): Promise<void>
}
