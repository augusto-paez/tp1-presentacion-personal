import { skills } from '../data/skills';
import SkillCard from './SkillCard';

function SkillList() {
    return (
        <section className="my-8">
            <h2 className="text-xl font-bold text-slate-200 mb-4">Mis Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.id}
                        name={skill.name}
                        level={skill.level}
                        isFavorite={skill.isFavorite}
                    />
                ))}
            </div>
        </section>
    );
}

export default SkillList;