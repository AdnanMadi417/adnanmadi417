type SplitTextProps = {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  justify?: 'center' | 'flex-start' | 'flex-end';
};

const SplitText = ({
  text,
  as: Tag = 'h2',
  className = '',
  stagger = 0.055,
  delay = 0,
  once = true,
  justify = 'center',
}: SplitTextProps) => (
  <Tag
    className={className}
    style={{ display: 'flex', flexWrap: 'wrap', justifyContent: justify, gap: '0.25em' }}
  >
    {text.split(' ').map((word, i) => (
      <span
        key={`${word}-${i}`}
        data-aos="fade-up"
        data-aos-delay={Math.round((delay + i * stagger) * 1000)}
        data-aos-once={once}
        style={{ display: 'inline-block', willChange: 'transform' }}
      >
        {word}
      </span>
    ))}
  </Tag>
);

export { SplitText };
