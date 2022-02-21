// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  try {
    const response = fetch(`?api_key=70191eb81d532ebe1d48d480d5919abf`)

    
  } catch (error) {
    
  }
  res.status(200).json({ name: 'John Doe' })
}
