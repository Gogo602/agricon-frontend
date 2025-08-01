import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

function Cta() {
    return (
        <section
            className="
                relative flex items-center justify-center
                bg-[url(/cta.webp)] bg-cover bg-center bg-no-repeat h-auto py-15
            "
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative  text-center text-white lg:px-80">
                <div className="pt-20 pb-15">
                    <motion.h1
                        className="text-2xl md:text-3xl font-bold leading-tight mb-2 animate-fade-in-up text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        Ready to Stop Losing Harvest  to Spoilage?
                    </motion.h1>
                    <motion.p
                        className="text-lg px-5 md:text-xl mb-5 animate-fade-in-up delay-200 "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 0.5, delay: 0.5}}
                    >
                        Join thousands of farmers already saving money and increasing their income
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 1, delay: 0.8}}
                    >
                        <Link to='/roles' className='hover:cursor-pointer bg-[#02402D] border border-[#FFAC00] rounded-full pl-5 py-3 font-bold'>
                            Start Saving Today <FaAngleRight className="inline-block bg-[#FFAC00] rounded-full text-black mb-1 ml-2 mr-1" size={38}/>
                        </Link>
                    </motion.div>
                    
                </div>
            </div>
        </section>
    );
}
export default Cta;