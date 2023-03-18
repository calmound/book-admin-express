import express, { Request, Response, NextFunction } from 'express';
import { Book } from '../model';

var router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const bookModel = new Book(req.body);
  const book = await bookModel.save();

  return res.status(200).json({ message: '创建成功' });
});

router.get('/', async (req: Request, res: Response) => {
  const { current = 1, pageSize = 10, name, author, category } = req.query;
  // 查询总数
  const total = await Book.countDocuments({
    ...(name && { name }),
    ...(author && { author }),
    ...(category && { category }),
  });
  console.log(
    '%c [ total ]-17',
    'font-size:13px; background:pink; color:#bf2c9f;',
    total
  );

  // 分页查询
  const data = await Book.find({
    ...(name && { name }),
    ...(author && { author }),
    ...(category && { category }),
  })
    .populate('category')
    .sort({ updatedAt: -1 })
    .skip((Number(current) - 1) * Number(pageSize))
    .limit(Number(pageSize));

  return res.status(200).json({ data, total });
});

router.get('/:id', async (req: Request, res: Response) => {
  const book = await Book.findOne({ _id: req.params.id }).populate('category');
  if (book) {
    res.status(200).json({ data: book, success: true });
  } else {
    res.status(500).json({ message: '该书籍不存在' });
  }
});

// 更新一本书
router.put('/:id', async (req: Request, res: Response) => {
  try {
    await Book.findOneAndUpdate({ _id: req.params.id }, req.body);

    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    await Book.deleteOne({ _id: req.params.id });

    res.status(200).json({ success: true });
  } else {
    res.status(500).json({ message: '该书籍不存在' });
  }
});

export default router;
