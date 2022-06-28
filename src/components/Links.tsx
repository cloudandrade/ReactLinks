import { Chalkboard, Lightning, CloudArrowUp, Clock, LineSegments } from 'phosphor-react'


const awslink = 'https://signin.aws.amazon.com/oauth?client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&code_challenge=v9Cs0Pcuk1lRJ6KNiLyF_y7uWsybAN33G6z2C3urm7I&code_challenge_method=SHA-256&response_type=code&redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26region%3Dus-east-1%26state%3DhashArgsFromTB_us-east-1_0960349bbed468dc&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCzjTV%2FYjv20fxw8Nck8ucRnZsgowaG0nkWc%2Bw270jNVQIgH%2FTez7fcdV2aUl4ws%2FYR8%2FpXVFPx9N1kHCc%2B%2FXy7pjIqkwII7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgwzNTg4MjE4ODA1NjUiDFSDVIFkwkbjLKd4CCrnAc9c4GJl1GLDxHIxMjstcOY%2F6o6P%2Fsi0e4TAoqYTqsucsJcmQDQX2yt82usw5ZmcYkoa0Z466YKgNGEr%2BH1ZZv9RN9YL3kGtyw1ffT3QlpLCEQkspGqzbT98DIi14OLppOINcKbw7pKTUqJ8RJAa3hvAq6wAhpjBtmRw19sG7LrChSraXDQ9DiXWd1QrNcfkCtcFA7oGcNJS3mi65zkhrfsU3IQs3imOgcciMPfveya64jWjvdPZKKBnMyEes5u7LC%2BipmDnLYOymmxw6xJUBiacci6MFGChGA3SwLC7%2FqQBQmP63nPB2TCS8uuVBjqPARibrXfS5mZBOJH8AKii%2BTkN5U%2FfAE0RNBNc7mDozTBAR872vQxqjCoVzIhMTX7FsHzcVaLXY0sXKqL3JsNZqe4pul5aGqMfEXlHhtkDQGL6bh8v0U8gEnKO1wrJjJd%2FwhQrM0I2H%2BHW%2BkpgTXye3wyl6%2BTR4gPMuLKV%2Fksq6wNkq8OdLCc2ECu1GhrCVeML&X-Amz-Date=20220628T125623Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVHC3TML26VULI72F%2F20220628%2Fus-east-1%2Fsignin%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=983bd8826ac90ea22e0c25f404ed31214151aa521040c6ee4f37c1e9e3906240'

const rmportallink = 'https://squadratecnologia115898.rm.cloudtotvs.com.br/Corpore.Net/Login.aspx'

const boardlink = 'https://raizenacelera.atlassian.net/jira/software/c/projects/SBOXYGEN/boards/414'

const bitbucketlink = 'https://bitbucket.org/dashboard/repositories'





export function Links() {


  return (
    <div className='flex-1' >


      <div className='p-8 max-w-[1100px] mx-auto' >
        <div className="flex items-center justify-center gap-16">
          <div className="flex gap-4">

            {/** Botão 1 */}
            <a href={awslink} target="_blank" className="p-4 text-sm bg-orange-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-orange-700 transition-colors">
              <CloudArrowUp size={24} />
              AWS HOME
            </a>
            {/** Botão 2 */}
            <a href={boardlink} target="_blank" className="p-4 text-sm bg-yellow-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-yellow-700 transition-colors">
              <Chalkboard size={24} />
              Board Oxygen
            </a>

            {/** Botão 3 */}
            <a href={bitbucketlink} target="_blank" className="p-4 text-sm bg-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-700 transition-colors">
              <LineSegments size={24} />
              Bitbucket - Oxygen
            </a>

            {/** Botão 4 */}
            <a href={rmportallink} target="_blank" className="p-4 text-sm bg-gray-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-gray-700 transition-colors">
              <Clock size={24} />
              RM Portal
            </a>
          </div>
        </div>

      </div>
    </div>)
}