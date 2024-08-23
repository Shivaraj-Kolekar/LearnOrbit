import { db } from '../../drizzle.config'

export default async function handler (req, res) {
  const { userId, completedTasks } = req.body

  if (req.method === 'POST') {
    try {
      await db.insert('tasks').values({
        userId,
        completedTasks
      })
      res.status(200).json({ message: 'Tasks saved successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Error saving tasks' })
    }
  } else if (req.method === 'GET') {
    try {
      const tasks = await db.select().from('tasks').where({ userId })

      res.status(200).json(tasks)
    } catch (error) {
      res.status(500).json({ error: 'Error fetching tasks' })
    }
  }
}
