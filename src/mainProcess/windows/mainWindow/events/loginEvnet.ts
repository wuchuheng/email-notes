/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/6/4 05:34
 */

import { ipcMain } from 'electron';
import ImapService from '../../../services/imapService';

const loginEventName = 'login';

const darkModeToggleEvent = () => {
  ipcMain.handle(loginEventName, async (event, args: AccountType): Promise<void> => {
    const imapService = await ImapService.connect({
      user: args.username,
      password: args.password,
      host: 'imap.qq.com',
      port: 993,
      tls: true,
      authTimeout: 10000,
    });
    try {
      await imapService.openBox();
    } catch (e) {
      if (e.message === 'Folder not exist!') {
        await imapService.addBox();
        await imapService.openBox();
      }
    }
  });
};

export { loginEventName };

export default darkModeToggleEvent;
