import { auth } from '../../utils/db/firebase';

export default (req, res) => {
  console.log('currentUser:', auth.currentUser);
  if (auth.currentUser) return res.status(200).json({ message: 'logged in' })
  return res.status(400).json({ message: 'not logged in' })
}