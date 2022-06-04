/**
 *  This file is part of emailNotes.
 *
 * @Description Say some thing for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/6/1 02:37
 */
import React from 'react';
import { Typewriter } from '@wuchuhengtools/type-writer';
import style from './style.module.less';
import '@wuchuhengtools/type-writer/lib/typewriter/style/index.css';

const SubTitleRender: React.FC = () => {
  const title = 'emailNotes是一款基于email同步数据的笔记工具.';

  return (
            <div className={style.main}>
                <Typewriter content={title} cycleNum={3} speed={100} />
            </div>
  );
};

export default SubTitleRender;
