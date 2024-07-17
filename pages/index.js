import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Spline scene="https://prod.spline.design/AS6sHWbMp5f6xqIp/scene.splinecode" />
    </main>
  );
}
